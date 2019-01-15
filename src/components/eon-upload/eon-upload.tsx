import {
  Component,
  Event,
  EventEmitter,
  // State,
  Method,
  Prop,
  Element, Listen, State,
} from '@stencil/core';
import _ from 'lodash';
import {ImageStyle, Size, UploadStyle, UploadType} from "../../types/theme";

/*
* TODO:
* [ ] Add Input TOO
* [ ] Add Progress bars, etc
* [ ] Add style list, simple
* [ ] Add style on drag over
* [ ] Integrate with eon-form
* [ ] Move icon types to a map with Prop
* */

@Component({
  tag: 'eon-upload',
  styleUrl: 'eon-upload.scss'

})
export class EonUpload {

  @Prop({ context: 'config' }) config: any;
  @Element() element: HTMLElement;
  @Prop() value: any;
  @Prop() name: string;
  @Prop() placeholder: string = 'Upload File(s) - Click, tap, or drag to begin your file upload adventure';
  @Prop() context: string = 'primary';
  @Prop({attr: 'eonId'}) eonId: string = 'eon-upload-' + _.random(0, 100000000);
  @Prop() type: UploadType = 'dropzone';
  @Prop() size: Size = 'md';
  @Prop({mutable: true}) adapter: any;
  @Prop() method: string = 'upload';
  @Prop() preview: boolean = false;
  @Prop() multiple: boolean = true;
  @Prop() mainImage: boolean = false;
  @Prop() imageStyle: ImageStyle = 'rounded';
  // @Prop() manual: boolean = false;
  @Prop() accept: string = '';
  @Prop() engStyle: UploadStyle = 'card';
  @Prop() uploadOnSelect: boolean = false;
  @Prop() bindSelector = '[eon-bind]';
  @Prop() errorSelector = '[eon-error]';
  @Prop() errorMsg: string = '';
  @Prop() successMsg: string = '';
  @Event({eventName: 'eonFileSelect'}) onFileSelect: EventEmitter;
  @Event({eventName: 'eonFileClear'}) onFileClear: EventEmitter;
  @Event({eventName: 'eonUploadProgress'}) onUploadProgress: EventEmitter;
  @Event({eventName: 'eonUploadStart'}) onUploadStart: EventEmitter;
  @Event({eventName: 'eonUploadEnd'}) onUploadEnd: EventEmitter;
  @State() fileSelected: boolean = false;
  @State() filePreviews: any[] = [];
  uploadedFiles: any[] = [];


  private inputElement: HTMLInputElement;

  componentDidLoad() {
    this.inputElement = this.element.querySelector('#' + this.eonId);
  }

  @Method('select')
  select() {
    this.inputElement.click();
    this.inputElement.addEventListener('select', () => {
      this.fileSelected = true;
      if (this.uploadOnSelect) this.start();
    });
  }

  @Method('start')
  async start(event?, files?) {
    if (!files) files = this.filePreviews;
    let uploaded = [];
    this.onUploadStart.emit({
      status: 'starting',
      adapter: this.adapter,
      id: this.eonId,
      preview: files
    });
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    try {
      const preppedFiles = this.removeUploaded(files);
      if (!preppedFiles || !preppedFiles.length) {
        return uploaded;
      } else if (this.adapter && this.adapter.$addFiles && !this.mainImage) {
        uploaded = await this.adapter.$addFiles(preppedFiles);
      } else if (this.adapter && this.adapter.$setImage && this.mainImage && preppedFiles && preppedFiles.length) {
        uploaded = await this.adapter.$setImage(undefined, undefined, preppedFiles[0]);
      } else if (this.adapter && this.adapter[this.method]) {
        uploaded = await this.adapter[this.method](preppedFiles);
      } else {
        throw new Error('Adapter Needs Upload Method')
      }
      this.onUploadEnd.emit({
        status: 'finished',
        adapter: this.adapter,
        id: this.eonId,
        preview: files,
        finished: uploaded,
      });
      this.setFileUploadStatus(uploaded);
    } catch (error) {
      this.onUploadEnd.emit({
        status: 'Error',
        message: error,
        adapter: this.adapter,
        id: this.eonId,
        preview: files,
        finished: uploaded,
      });
    }
    return uploaded;
  }

  @Method('pause')
  pause() {
    // TODO: do
  }

  @Method('clear')
  clear(event?) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.inputElement.value = '';
    this.filePreviews = [];
    this.onFileClear.emit({
      status: 'cleared',
      adapter: this.adapter,
      id: this.eonId,
      files: this.filePreviews
    });
  }

  @Method('getInputElement')
  getInputElement() {
    return this.inputElement;
  }

  @Method('setAdapter')
  setAdapter(adapter, onlyIfMissing = false) {
    if (onlyIfMissing && this.adapter) return;
    return this.adapter = adapter;
  }

  @Listen('click')
  handleClick() {
    this.select();
  }

  setFileUploadStatus(uploaded) {
    this.filePreviews = [
      ..._.map(this.filePreviews, value => {
        _.map(uploaded, v => console.log(v, value.name))
        const found = _.find(uploaded, {name: value.name});
        if ( found && value ) {
          value.state = found.meta.state;
          value.$id = found.meta.state;
        }
        console.log('value', value);
        console.log('found', found);
        return value;
      })
    ];

    this.uploadedFiles = [
      ...this.uploadedFiles,
      ...uploaded
    ];
  }

  removeUploaded(files) {
    return _.filter(files, value => value && value.state !== 'success');
  }

  getFileTypeIcon(type: string) {
    let icon = 'file';
    if (type.search('image') > -1) {
      icon = 'file-image';
    } else if (type.search('msdownload') > -1) {
      icon = 'file-signature';
    } else if (type.search('compressed') > -1 || type.search('zip') > -1) {
      icon = 'file-archive';
    } else if (type.search('text') > -1) {
      icon = 'file-word';
    } else if (type.search('excel') > -1) {
      icon = 'file-excel';
    } else if (type.search('audio') > -1) {
      icon = 'file-audio';
    } else if (type.search('pdf') > -1) {
      icon = 'file-pdf';
    /* TODO: add more code support*/
    } else if (type.search('javascript') > -1) {
      icon = 'file-code';
    }
    return <eon-icon title={type} name={icon} />
  }

  removeFile(event, file) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.filePreviews = _.filter(this.filePreviews, (_file) => _file.name !== file.name);
  }

  previewFilesDrop(event) {
    event.preventDefault();
    if (this.mainImage) {
      this.filePreviews = [];
    }
    const files = [];
    if (event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind === 'file') {
          let file = event.dataTransfer.items[i].getAsFile();
          files.push(file);
        }
      }
    } else {
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        files.push(event.dataTransfer.files[i]);
      }
    }
    this.filePreviews = [
      ...this.filePreviews,
      ...files
    ];
    this.onFileSelect.emit({
      status: 'selected',
      adapter: this.adapter,
      id: this.eonId,
      files: this.filePreviews
    });
    this.removeDragData(event);
  }

  removeDragData(event) {
    if (event.dataTransfer.items) {
      event.dataTransfer.items.clear();
    } else {
      event.dataTransfer.clearData();
    }
  }

  previewFiles(event) {
    event.preventDefault();
    if (this.mainImage) {
      this.filePreviews = [];
    }
    if (event.target && event.target.files && event.target.files.length) {
      this.filePreviews = [
        ...this.filePreviews,
        ..._.map(event.target.files, value => value)
      ];
    } else if (!this.filePreviews.length) {
      this.filePreviews = [];
    }
    this.onFileSelect.emit({
      status: 'selected',
      adapter: this.adapter,
      id: this.eonId,
      files: this.filePreviews
    });
  }

  dragOverHandler(event) {
    event.preventDefault();
  }

  formatBytes(a, b?) {
    if (0 == a) return "0 Bytes";
    let c = 1024, d = b || 2, e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
  }

  renderFilePreview() {
    return [
      !this.uploadOnSelect ?
        <div class="row dropzone-controls">
          <eon-button class="float-right" context="warning" outline={true} size="sm" onClick={(e) => this.clear(e)}>
            Clear All
          </eon-button>
          <eon-button class="float-right" context="primary" outline={true} size="sm" onClick={(e) => this.start(e)}>
            Upload All
          </eon-button>
          <eon-button class="float-right" context="primary" outline={true} size="sm">
            Add
          </eon-button>
        </div>
      : null,
      <div class="row">
        {this.filePreviews.map(file =>
          <eon-card type="pass" class="mb-2 col-xs-12 col-sm-6 col-md-4 col-lg-3">
            {file.type.search('image') > -1 ?
              <img class="img-fluid card-img-top" src={URL.createObjectURL(file)} alt=""/>
              :
              <h2 class="text-center fa-5x">{this.getFileTypeIcon(file.type)}</h2>
            }

            <div class="card-body">
              <p class="card-title p-0 m-0">{file.name}</p>
              <p class="card-text p-0 m-0 mb-1">{this.getFileTypeIcon(file.type)} {this.formatBytes(file.size)}</p>

              {file.state === 'success' ?
                  <h5 class="text-center"> Uploaded! </h5>
                : [
                  <eon-button class="" context="clear" outline={false} size="sm" onClick={(e) => this.removeFile(e, file)}>
                    remove
                  </eon-button>,
                  <eon-button class="" context="clear" outline={false} size="sm" onClick={(e) => this.start(e, [file])}>
                    upload
                  </eon-button>
              ]}
            </div>
          </eon-card>
        )}
      </div>
    ];
  }

  renderDropzone() {
    return (
      <div
        class={`eon-dropzone eon-dropzone-${this.size}`}
      >
        {!this.filePreviews || !this.filePreviews.length ? this.placeholder : null}
        {this.renderInput()}
        {this.filePreviews && this.filePreviews.length ? this.renderFilePreview() : null}
      </div>
    );
  }

  renderProfile() {
    return (
      <div class={`eon-profile-image profile-image-${this.imageStyle}`}>
        {this.renderInput()}
        {
          this.filePreviews[0] ?
            <img class="d-block mx-auto img-fluid w-75" src={URL.createObjectURL(this.filePreviews[0])} alt=""/>
          : [
            <eon-icon class="d-block mx-auto text-center" fa="fas" name={`${this.imageStyle === 'circle' ? 'user-circle' : 'user'}`} size="100px" />,
            <h5 class="text-center"> upload </h5>
            ]
        }
      </div>
    );
  }

  //
  // renderInputUpload() {
  //   return (
  //     <eon-input
  //       placeholder={}
  //     >
  //     </eon-input>
  //   );
  // }

  renderInput(hidden = true) {
    return (
      <input
        id={this.eonId}
        class={`${hidden ? 'invisible' : ''}`}
        multiple={this.multiple}
        accept={this.accept}
        type="file"
        onChange={(e) => this.previewFiles(e)}
      />
    );
  }

  renderType() {
    switch (this.type) {
      case 'input':
        return this.renderInput(false);
      case 'hidden':
        return this.renderInput();
      case 'profile':
        return this.renderProfile();
      default:
        return this.renderDropzone();
    }
  }

  render() {
    return (
      <div onDragOver={(e) => this.dragOverHandler(e)} onDrop={(e) => this.previewFilesDrop(e)}>
        {this.renderType()}
      </div>
    )
  }
}
