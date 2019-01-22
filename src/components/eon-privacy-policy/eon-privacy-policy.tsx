import {Component, Element, Prop} from '@stencil/core';
import { EonPrivacyPartnerInterface } from './eon-privacy-policy.interface';
/*
* TODO:
* [X] Clauses for Ads
* [X] Clauses for Payment Processors
* [X] Clauses for Remarketing
* [X] Clauses for FNT Signals Policy under CalOPPA
* [X] Clauses for GDPR
* [ ] Make almost everything optional
* */

@Component({
  tag: 'eon-privacy-policy'
})
export class EonPrivacyPolicy {

  @Prop({ context: 'config' }) config: any;
  @Prop() showHeader: boolean = false;
  @Prop() legalName: string = 'DevEngage LLC';
  @Prop() url: string = 'devengage.io';
  @Prop() mobile: string = 'DevEngage';
  @Prop() effective: Date = new Date();
  @Prop() contacts: object[] = [
    {
      type: 'email',
      value: 'info@devengage.io',
    }
  ];
  @Prop() covers: string[] = [
    'Website'
  ];
  @Prop() personalData: string[] = [
    'Email address',
    'First name and last name',
    'Phone number',
    'Address, State, Province, ZIP/Postal code, City',
    'Cookies and Usage Data',
    'Location Data',
  ];

  /* Services */
  @Prop() kitchenSink: boolean =  false;
  @Prop() facebook: boolean =  false;
  @Prop() googleAnalytics: boolean =  false;
  @Prop() googleAdSense: boolean =  false;
  @Prop() googleAdmob: boolean =  false;
  @Prop() googleAdWords: boolean =  false;
  @Prop() twitter: boolean =  false;
  @Prop() appleStore: boolean =  false;
  @Prop() googleStore: boolean =  false;
  @Prop() stripe: boolean =  false;
  @Prop() paypal: boolean =  false;
  @Prop() braintree: boolean =  false;
  @Prop() firebase: boolean =  false;

  /* Custom Services*/
  @Prop() analytics: EonPrivacyPartnerInterface[] = [];
  @Prop() advertising: EonPrivacyPartnerInterface[] = [];
  @Prop() remarketing: EonPrivacyPartnerInterface[] = [];
  @Prop() payments: EonPrivacyPartnerInterface[] = [];
  @Prop() storage: EonPrivacyPartnerInterface[] = [];
  @Element() element: HTMLElement;


  getMonth(month) {
    switch(month) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
    }
  }


  /*Advertising*/
  renderGoogleAnalytics() {
    if (!this.googleAnalytics && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>Google Analytics</strong></p>
        <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
        <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
      </li>
    );
  }


  /*Advertising*/
  renderGoogleAdsense() {
    if (!this.googleAdSense && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>Google AdSense & DoubleClick Cookie</strong></p>
        <p>Google, as a third party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet.</p>
        <p>You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page: <a href="http://www.google.com/ads/preferences/">http://www.google.com/ads/preferences/</a></p>
      </li>
    );
  }
  renderGoogleAdmob() {
    if (!this.googleAdmob && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>AdMob by Google</strong></p>
        <p>AdMob by Google is provided by Google Inc.</p>
        <p>You can opt-out from AdMob by Google service by following the instructions described by Google: <a href="https://support.google.com/ads/answer/2662922?hl=en">https://support.google.com/ads/answer/2662922?hl=en</a></p>
        <p>For more information on how Google uses the collected information, please visit the "How Google uses data when you use our partners' sites or app" page: <a href="http://www.google.com/policies/privacy/partners/">http://www.google.com/policies/privacy/partners/</a> or visit the Privacy Policy of Google: <a href="http://www.google.com/policies/privacy/">http://www.google.com/policies/privacy/</a></p>
      </li>
    );
  }

  /* Remarketing */
  renderGoogleAdwords() {
    if (!this.googleAdWords && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>Google AdWords</strong></p>
        <p>Google AdWords remarketing service is provided by Google Inc.</p>
        <p>You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the Google Ads Settings page: <a href="http://www.google.com/settings/ads">http://www.google.com/settings/ads</a></p>
        <p>Google also recommends installing the Google Analytics Opt-out Browser Add-on - <a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a> - for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.</p>
        <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>

      </li>
    );
  }
  renderFacebookRemarketing() {
    if (!this.facebook && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>Facebook</strong></p>
        <p>Facebook remarketing service is provided by Facebook Inc.</p>
        <p>You can learn more about interest-based advertising from Facebook by visiting this page: <a href="https://www.facebook.com/help/164968693837950">https://www.facebook.com/help/164968693837950</a></p>
        <p>To opt-out from Facebook's interest-based ads follow these instructions from Facebook: <a href="https://www.facebook.com/help/568137493302217">https://www.facebook.com/help/568137493302217</a></p>
          <p>Facebook adheres to the Self-Regulatory Principles for Online Behavioral Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies
            through the Digital Advertising Alliance in the USA <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a>, the Digital Advertising Alliance of Canada in Canada
            <a href="http://youradchoices.ca/">http://youradchoices.ca/</a> or the European Interactive Digital Advertising Alliance in Europe <a href="http://www.youronlinechoices.eu/">http://www.youronlinechoices.eu/</a>,
            or opt-out using your mobile device settings.</p>
          <p>For more information on the privacy practices of Facebook, please visit Facebook's Data Policy: <a href="https://www.facebook.com/privacy/explanation">https://www.facebook.com/privacy/explanation</a></p>
      </li>
    );
  }
  renderTwitterRemarketing() {
    if (!this.twitter && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>Twitter</strong></p>
        <p>Twitter remarketing service is provided by Twitter Inc.</p>
        <p>You can opt-out from Twitter's interest-based ads by following their instructions: <a href="https://support.twitter.com/articles/20170405">https://support.twitter.com/articles/20170405</a></p>
        <p>You can learn more about the privacy practices and policies of Twitter by visiting their Privacy Policy page: <a href="https://twitter.com/privacy">https://twitter.com/privacy</a></p>
      </li>
    );
  }


  /* Payments */
  renderAppleStorePayment() {
    if (!this.appleStore && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>Apple Store In-App Payments</strong></p>
        <p>Their Privacy Policy can be viewed at <a href="https://www.apple.com/legal/privacy/en-ww/">https://www.apple.com/legal/privacy/en-ww/</a></p>
      </li>
    );
  }
  renderGoogleStorePayment() {
    if (!this.googleStore && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>Google Play In-App Payments</strong></p>
        <p>Their Privacy Policy can be viewed at <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a></p>
      </li>
    );
  }
  renderStripePayment() {
    if (!this.stripe && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>Stripe</strong></p>
        <p>Their Privacy Policy can be viewed at <a href="https://stripe.com/us/privacy">https://stripe.com/us/privacy</a></p>
      </li>
    );
  }
  renderPaypalBriantreePayment() {
    if (!this.paypal && !this.braintree  && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>PayPal or Braintree</strong></p>
        <p>Their Privacy Policy can be viewed at <a href="https://www.paypal.com/webapps/mpp/ua/privacy-full">https://www.paypal.com/webapps/mpp/ua/privacy-full</a></p>
      </li>
    );
  }

  /* FULL SERVICE AKA FIREBASE*/
  renderFirebaseService() {
    if (!this.firebase && !this.kitchenSink) return null;
    return (
      <li>
        <p><strong>Firebase</strong></p>
        <p>Firebase is provided by Google Inc.</p>
        <p>Firebase stores and manages data for users and the customer that can be used for analytics, authentication, push notifications, testing, hosting, and linking. </p>
        <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://firebase.google.com/support/privacy/">https://firebase.google.com/support/privacy/</a></p>
      </li>
    );
  }

  renderPartnerList(list) {

    return (
        list.map(partner =>
          <li>
            <p><strong>{partner.name}</strong></p>
            {partner.details ? <p>{partner.details}</p>  : null}
            {partner.optOut ? <p>{partner.optOut} {partner.optOutHref ? <a href={partner.optOutHref}>{partner.optOutHref}</a> : null}</p> : null }
            <p>For more information on the privacy practices and data collection of {partner.company}, please visit the {partner.company} Privacy & Terms web page: <a href={partner.more}>{partner.more}</a></p>

          </li>
        )
    );
  }

  render() {
    return (
      <div >

        {/*<h1>Privacy Policy</h1>*/}


        <p>Effective date: {this.getMonth(this.effective.getMonth())} {this.effective.getDate()}, {this.effective.getFullYear()}</p>


        <p>{this.legalName} ("us", "we", or "our") operates the {this.url} website {this.mobile ? `and the ${this.mobile} mobile application` : ''} (the "Service").</p>

        <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

        <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>

        {/**/}
        <h3>Definitions</h3>
        <ul>
          <li>
            <p><strong>Service</strong></p>
            <p>Service means the devengage.io website and the Games Revealed mobile application operated by DevEngage LLC</p>
          </li>
          <li>
            <p><strong>Personal Data</strong></p>
            <p>Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).</p>
          </li>
          <li>
            <p><strong>Usage Data</strong></p>
            <p>Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
          </li>
          <li>
            <p><strong>Cookies</strong></p>
            <p>Cookies are small pieces of data stored on your device (computer or mobile device).</p>
          </li>
          <li>
            <p><strong>Data Controller</strong></p>
            <p>Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed.</p>
            <p>For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.</p>
          </li>
          <li>
            <p><strong>Data Processors (or Service Providers)</strong></p>
            <p>Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the Data Controller.</p>
            <p>We may use the services of various Service Providers in order to process your data more effectively.</p>
          </li>
          <li>
            <p><strong>Data Subject (or User)</strong></p>
            <p>Data Subject is any living individual who is using our Service and is the subject of Personal Data.</p>
          </li>
        </ul>

        {/**/}
        <h3>Information Collection And Use</h3>

        <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

        <h4>Types of Data Collected</h4>

        <h5>Personal Data</h5>

        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>

        <ul>
          {this.personalData.map(data => <li>{data}</li>)}
        </ul>

        <h5>Usage Data</h5>

        <p>We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data").</p>
        <p>This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
        <p>When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>

        <h5>Location Data</h5>
        <p>We may use and store information about your location if you give us permission to do so (“Location Data”). We use this data to provide features of our Service, to improve and customize our Service.</p>
        <p>You can enable or disable location services when you use our Service at any time, through your device settings.</p>



        <h5>Tracking & Cookies Data</h5>
        <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
        <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
        <p>Examples of Cookies we use:</p>
        <ul>
          <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>
          <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
          <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
          <li><strong>Advertising Cookies.</strong> Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</li>
        </ul>

        {/**/}
        <h3>Use of Data</h3>

        <p>{this.legalName} uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
          <li>To provide customer care and support</li>
          <li>To provide analysis or valuable information so that we can improve the Service</li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
          <li>To provide you with news, special offers and general information about other goods, services and events
            which we offer that are similar to those that you have already purchased or enquired about unless you have
            opted not to receive such information</li>
        </ul>


        {/* European Economic Area (EEA) */}
        <h3>Legal Basis for Processing Personal Data Under General Data Protection Regulation (GDPR)</h3>
        <p>If you are from the European Economic Area (EEA), DevEngage LLC legal basis for collecting and using the
          personal information described in this Privacy Policy depends on the Personal Data we collect and the
          specific context in which we collect it.</p>
        <p>DevEngage LLC may process your Personal Data because:</p>
        <ul>
          <li>We need to perform a contract with you</li>
          <li>You have given us permission to do so</li>
          <li>The processing is in our legitimate interests and it's not overridden by your rights</li>
          <li>For payment processing purposes</li>    <li>To comply with the law</li>
        </ul>

        {/**/}
        <h3>Retention of Data</h3>
        <p>DevEngage LLC will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
        <p>DevEngage LLC will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.</p>

        {/**/}
        <h3>Transfer Of Data</h3>
        <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
        <p>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>
        <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
        <p>{this.legalName} will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>


        {/**/}
        <h3>Disclosure Of Data</h3>

        <h4>Business Transaction</h4>
        <p>If DevEngage LLC is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>

        <h4>Disclosure for Law Enforcement</h4>
        <p>Under certain circumstances, DevEngage LLC may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>


        <h4>Legal Requirements</h4>
        <p>{this.legalName} may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
        <ul>
          <li>To comply with a legal obligation</li>
          <li>To protect and defend the rights or property of {this.legalName}</li>
          <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>To protect the personal safety of users of the Service or the public</li>
          <li>To protect against legal liability</li>
        </ul>

        {/**/}
        <h3>Security Of Data</h3>
        <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>


        {/**/}
        <h3>"Do Not Track" Signals Under California Online Privacy Protection Act (CalOPPA)</h3>
        <p>We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>
        <p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>


        {/**/}
        <h3>Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h3>
        <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. DevEngage LLC aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
        <p>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>
        <p>In certain circumstances, you have the following data protection rights:</p>
        <ul>
          <li>
            <p><strong>The right to access, update or to delete the information we have on you.</strong> Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.</p>
          </li>
          <li>
            <p><strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</p>
          </li>
          <li>
            <p><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</p>
          </li>
          <li>
            <p><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.</p>
          </li>
          <li>
            <p><strong>The right to data portability.</strong> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</p>
          </li>
          <li>
            <p><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where DevEngage LLC relied on your consent to process your personal information.</p>
          </li>
        </ul>
        <p>Please note that we may ask you to verify your identity before responding to such requests.</p>

        <p>You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).</p>


        {/**/}
        <h3>Service Providers</h3>
        <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
        <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

        {/*1. Analytics*/}
        <h4>Analytics</h4>
        <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
        <ul>
          {this.renderGoogleAnalytics()}
          {this.renderPartnerList(this.analytics)}
        </ul>


        {/*2. Advertising*/}
        <h4>Advertising</h4>
        <p>We may use third-party Service Providers to show advertisements to you to help support and maintain our Service.</p>
        <ul>
          {this.renderGoogleAdsense()}
          {this.renderGoogleAdmob()}
          {this.renderPartnerList(this.advertising)}
        </ul>

        {/*3. Behavioral Remarketing*/}
        <h4>Behavioral Remarketing</h4>
        <p>DevEngage LLC uses remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimize and serve ads based on your past visits to our Service.</p>
        <ul>
          {this.renderGoogleAdwords()}
          {this.renderTwitterRemarketing()}
          {this.renderFacebookRemarketing()}
          {this.renderPartnerList(this.remarketing)}
        </ul>

        {/*3. Payments*/}
        <h4>Payments</h4>
        <p>We may provide paid products and/or services within the Service. In that case, we use third-party services for payment processing (e.g. payment processors).</p>
        <p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>
        <p>The payment processors we work with are:</p>
        <ul>
          {this.renderAppleStorePayment()}
          {this.renderGoogleStorePayment()}
          {this.renderStripePayment()}
          {this.renderPaypalBriantreePayment()}
          {this.renderPartnerList(this.payments)}
        </ul>


        {/*4.*/}
        <h4>Databases and File Storage</h4>
        <p>We may collect data inputted by you and store it in database and/or file storage for later use by you or other users. we might use the data to improve the user experience.</p>
        <p>We will not store or collect your sensitive information with out taking proper measure to secure it. we will either use a server or service to store the data</p>
        <p>The third-party service we work with are:</p>
        <ul>
          {this.renderFirebaseService()}
          {this.renderPartnerList(this.storage)}
        </ul>



        {/**/}
        <h3>Links To Other Sites</h3>
        <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
        <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>


        <h3>Children's Privacy</h3>
        <p>Our Service does not address anyone under the age of 18 ("Children").</p>
        <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>


        <h3>Changes To This Privacy Policy</h3>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>


        <h3>Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul>
          {this.contacts.map((contact: any) => <li>By {contact.type}: {contact.value}</li>)}

        </ul>


        {/*{this.showHeader ? <h3>Privacy Policy for {this.legalName}</h3> : null }*/}
        {/*<p>At {this.url}, one of our main priorities is the privacy of*/}
        {/*our visitors. This Privacy Policy document contains types of information that is collected and recorded by*/}
         {/*{' '+this.url} and how we use it.</p>*/}
        {/*<p>If you have additional questions or require more information about our*/}
        {/*Privacy Policy, do not hesitate to contact us by email at {this.email}.</p>*/}

        {/*<p><strong>Log Files</strong></p>*/}
        {/*<p>{this.url} follows a standard procedure of using log files. These files log visitors*/}
        {/*when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The*/}
        {/*information collected by log files include internet protocol (IP) addresses, browser type, Internet Service*/}
        {/*Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not*/}
        {/*linked to any information that is personally identifiable. The purpose of the information is for analyzing*/}
        {/*trends, administering the site, tracking users’ movement on the website, and gathering demographic*/}
        {/*information.</p>*/}

        {/*<h3>Cookies and Web Beacons</h3>*/}
        {/*<p>Like any other website, {this.url} uses ‘cookies’.*/}
        {/*These cookies are used to store information including visitors’ preferences, and the pages on the website*/}
        {/*that the visitor accessed or visited. The information is used to optimize the users’ experience by*/}
        {/*customizing our web page content based on visitors’ browser type and/or other information.</p>*/}

        {/*<h3>Our Advertising Partners</h3>*/}
        {/*<p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:</p>*/}
        {/*<ul>*/}
          {/*{this.partners.map(partner => <li>{partner}</li>)}*/}
        {/*</ul>*/}
        {/*<p>Each of our advertising partners has their own Privacy Policy for their website. For easier access, an*/}
          {/*updated and hyperlinked resource is maintained here:</p>*/}

        {/*<p><strong>Privacy Policies</strong></p>*/}
        {/*<p>You may consult this list to find the Privacy Policy for each of the advertising partners of {this.url}.</p>*/}
        {/*<p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are*/}
          {/*used in their respective advertisements and links that appear on {this.url}, which are sent directly to*/}
          {/*users’ browser. They automatically receive your IP address when this occurs. These technologies are used*/}
          {/*to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content*/}
          {/*that you see on websites that you visit.</p>*/}
        {/*<p>Note that {this.url} has no access to or control over these cookies that are used by third-party advertisers.</p>*/}

        {/*<p><strong>Third Part Privacy Policies</strong></p>*/}
        {/*<p>{this.url}’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising*/}
        {/*you to consult the respective Privacy Policies of these third-party ad servers for more detailed*/}
        {/*information. It may include their practices and instructions about how to opt-out of certain options. You*/}
        {/*may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>*/}
        {/*<p>You can choose to disable cookies through your individual browser options. To know more detailed information about*/}
        {/*cookie management with specific web browsers, it can be found at the browsers’ respective websites. What Are*/}
        {/*Cookies?</p>*/}

        {/*<p><strong>Children’s Information</strong></p>*/}
        {/*<p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate*/}
        {/*in, and/or monitor and guide their online activity.</p>*/}
        {/*<p>{this.url} does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided*/}
        {/*this kind of information on our website, we strongly encourage you to contact us immediately and we will do*/}
        {/*our best efforts to promptly remove such information from our records.</p>*/}

        {/*<p><strong>Privacy Policy Covers</strong></p>*/}
        {/*<p>This privacy policy applies only to activities on our </p>*/}
        {/*<ul>*/}
          {/*{this.covers.map(cover => <li>{cover}</li>)}*/}
        {/*</ul>*/}
        {/*<p>This policy is valid for visitors to*/}
        {/*places mentioned with regards to the information that they shared and/or collect in {this.url}. This policy is*/}
        {/*not applicable to any information collected offline or via channels other than this what is listed.</p>*/}

        {/*<p><strong>Consent</strong></p>*/}
        {/*<p>By using our website and services, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>*/}

      </div>
    );
  }
}
