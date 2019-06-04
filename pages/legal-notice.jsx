import Head from 'next/head';

import ScrollController from 'components/controller/scroll-controller/ScrollController';

import { pageTitle } from 'helper/strings';

export default class LegalNotice extends React.Component {
	render() {
		return (
			<>
				<Head>
					<title>{pageTitle('Legal Notice')}</title>
				</Head>
				<ScrollController>
					<div className='page-content'>
						<pre>{content}</pre>
					</div>
				</ScrollController>
			</>
		);
	}
}

const content = `
LEGAL NOTICE

## Information according to § 5 TMG

Maximilian Schulke
Lemgoerstr 9
33604 Bielefeld, Germany

#### Contact

Phone: +49 176 43 69 21 62
E-mail: legal@maximilianschulke.com


## Value added tax ID

Sales tax identification number according to §27 a sales tax law:
68943027814


## Responsible for the content according to § 55 Abs. 2 RStV

Maximilian Schulke
Lemgoerstr 9
33604 Bielefeld, Germany

We are not prepared or obliged to participate in any dispute resolution proceedings prior to a
consumer arbitration board.

#### Liability for content

As a service provider, we are responsible for our own content on these pages according to § 7 Abs.1 TMG (German Telemedia Act).
responsible for the content of this website. According to §§ 8 to 10 TMG we are not responsible as a service provider for the 
contents of these pages. to monitor transmitted or stored third-party information or to monitor it according to circumstances. 
that indicate illegal activity. Obligations to remove or block the use of information in accordance with the general terms and 
conditions of use. Laws remain unaffected by this. A liability in this regard is however only valid from the date of the Knowledge 
of a concrete infringement possible. Upon becoming aware of corresponding We will remove these contents immediately if they violate the law.

#### Liability for links

Our offer contains links to external websites of third parties on whose contents we have no influence. Therefore, we cannot assume 
any liability for these external contents. For the contents of the The respective provider or operator of the pages is always 
responsible for the content of linked pages. The linked pages were checked for possible violations of the law at the time of linking.
Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is 
not possible without concrete clues of a Violation of rights unreasonable. If we become aware of any violations of the law, we will remove
such links from our website. immediately.

#### Copyright

The contents and works on these pages created by the site operators are subject to the German Copyright Act. Copyright.
Duplication, processing, distribution and any form of commercialization of such material beyond the scope of the copyright law
shall Limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are 
only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights
of third parties are protected. is observed. In particular, contents of third parties are marked as such. Should you nevertheless
refer to a If you become aware of any infringement of copyright, please inform us accordingly. With We will immediately remove such
content if we become aware of any violations of the law.
`;
