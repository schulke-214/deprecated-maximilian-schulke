import Head from 'next/head';

import ScrollController from 'components/controller/scroll-controller/ScrollController';

import { pageTitle } from 'helper/strings';

export default class DataPrivacy extends React.Component {
	render() {
		return (
			<>
				<Head>
					<title>{pageTitle('Data Privacy')}</title>
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
DATA PRIVACY STATEMENT

## Person in charge

Maximilian Leander Schulke
Lemgoer Street 9
33604 Bielefeld, Germany
legal@maximilianschulke.com


## Types of data processed

- stock data (for example, personal master data, names or addresses).
- contact data (e.g. e-mail, telephone numbers).
- content data (e.g., text input, photographs, videos).
- usage data (e.g., websites visited, interest in content, access times).
- meta/communication data (e.g., device information, IP addresses).


## Categories of data subjects

Visitors and users of the online offer (hereinafter referred to collectively as "users").

#### Purpose of processing

- The provision of the online offer, its functions and contents.
- Answer contact requests and communicate with users.
- Security measures.
- Reach measurement/Marketing.


## Terms used

#### Personal data

means any information relating to an identified or identifiable natural person (hereinafter "data subject"); a natural person who
can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data,
online identifier (e.g. a cookie) or to one or more specific characteristics  which express the physical, physiological, genetic, mental, economic, 
cultural or social identity of that natural person, is regarded as identifiable.

#### Processing

means any operation or set of operations which is carried out with or without the aid of automated processes and which involves
personal data. The term reaches far and covers practically every handling of data.
							

#### Pseudonymisation

means the processing of personal data in such a way that the personal data can no longer be attributed to a specific data subject
without the provision of additional information, provided that such additional information is kept separately and is subject to
technical and organisational measures ensuring that the personal data are not attributed to an identified or identifiable natural
person.
							

#### Profiling

means any automated processing of personal data consisting of the use of such personal data to evaluate certain personal aspects
relating to a natural person, in particular to analyse or predict aspects relating to the work performance, economic situation,
health, personal preferences, interests, reliability, conduct, whereabouts or movements of that natural person.


#### Controller

means any natural or legal person, public authority, agency or body which alone or jointly with others determines the purposes and means
of the processing of personal data.
							

#### Processor

means a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller.


## Applicable legal bases</h2>

In accordance with Art. 13 DSGVO we inform you about the legal basis of our data processing. The following applies to users from the
scope of the Basic Data Protection Regulation (DSGVO), i.e. the EU and the EEC, unless the legal basis is mentioned in the data
protection declaration: The legal basis for obtaining consent is Art. 6 para. 1 lit. a and Art. 7 DSGVO; The legal basis for the
processing for the fulfilment of our services and the implementation of contractual measures as well as the answering of inquiries is
Art. 6 para. 1 lit. b DSGVO; The legal basis for the processing for the fulfilment of our legal obligations is Art. 6 para. 1 lit. c DSGVO;


In the event that vital interests of the data subject or another natural person necessitate the processing of personal data, Art. 6
para. 1 lit. d DSGVO serves as the legal basis.

The legal basis for the processing necessary for the performance of a task carried out in the public interest or in the exercise of
official authority entrusted to the controller is Art. 6 para. 1 lit. e DSGVO. The legal basis for the processing to safeguard our
legitimate interests is Art. 6 para. 1 lit. f DSGVO. The processing of data for purposes other than those for which they were collected
is governed by the provisions of Art. 6 (4) DSGVO. The processing of special categories of data (pursuant to Art. 9 para. 1 DSGVO) is
governed by the provisions of Art. 9 para. 2 DSGVO.


## Safety precautions

We take appropriate technical and organisational measures in accordance with the legal requirements, taking into account the
state of the art, the implementation costs and the type, extent, circumstances and purposes of the processing, as well as the
different probability of occurrence and severity of the risk to the rights and freedoms of natural persons, in order to ensure a level
of protection appropriate to the risk.

Measures shall include, in particular, ensuring the confidentiality, integrity and availability of data by controlling physical access
to, access to, inputting, disclosure, securing and separation of data. In addition, we have established procedures to ensure that
data subjects' rights are exercised, that data is deleted and that we react to data threats. Furthermore, we take the protection of
personal data into account as early as the development or selection of hardware, software and processes, in accordance with the
principle of data protection through technology design and through data protection-friendly default settings. Cooperation with contract
processors, joint managers and third parties

Insofar as we disclose data to other persons and companies (contract processors, jointly responsible persons or third parties) within the
scope of our processing, transfer them to them or otherwise grant them access to the data, this shall only take place on the basis of
legal permission (e.g. if a transfer of the data to third parties, such as payment service providers, is necessary for the fulfilment
of the contract), users have consented, a legal obligation provides for this or on the basis of our legitimate interests (e.g. when
using agents, web hosts, etc.).

Insofar as we disclose, transmit or otherwise grant access to data to other companies of our group of companies, this is done in
particular for administrative purposes as a legitimate interest and beyond that on a basis corresponding to the legal requirements.


## Transfers to third countries

If we process data in a third country (i.e. outside the European Union (EU), the European Economic Area (EEA) or the Swiss
Confederation) or if this is done in the context of the use of third party services or disclosure or transfer of data to other persons or
companies, this only occurs if it is done to fulfil our (pre)contractual obligations, on the basis of your consent, a legal
obligation or on the basis of our legitimate interests. Subject to express consent or contractually required transfer, we process or
allow the data to be processed only in third countries with a recognised level of data protection, which includes US processors
certified under the "Privacy Shield" or on the basis of special guarantees, such as a contractual obligation through so-called 
standard protection clauses of the EU Commission, the existence of certifications or binding internal data protection regulations (Art.
44 to 49 DSGVO, information page of the EU Commission).


## Rights of data subjects

Right of access: You have the right to obtain confirmation as to whether the data in question will be processed and to obtain access
to such data, as well as further information and a copy of the data in accordance with the provisions of the law.

Right of rectification: You have the right, in accordance with the law, to request the completion of the data concerning you or the
rectification of the inaccurate data concerning you.

Right to deletion and limitation of processing: You have the right, in accordance with the statutory provisions, to demand that the
relevant data be deleted immediately or, alternatively, to demand that the processing of the data be restricted in accordance with the
statutory provisions.

Right to data transfer: You have the right to receive data concerning you which you have provided to us in a structured, common
and machine-readable format in accordance with the legal requirements, or to demand that it be transferred to another
responsible party.

Complaints to the supervisory authority: You also have the right to submit a complaint to the competent supervisory authority in
accordance with the statutory provisions.


## Right of withdrawal

You have the right to revoke any consent you have given with effect for the future.


## Right of objection

Right of objection: You have the right, for reasons arising from your particular situation, to object at any time to the processing
of personal data concerning you on the basis of Art. 6 para. 1 lit. e or f DSGVO; this also applies to profiling based on these
provisions. If the personal data concerning you are processed for the purpose of direct advertising, you have the right to object at
any time to the processing of the personal data concerning you for the purpose of such advertising; this also applies to profiling to
the extent that it is connected with such direct advertising.


## Cookies and right to object to direct advertising

"Cookies" are small files that are stored on the user's computer. Different data can be stored within the cookies. A cookie is
primarily used to store information about a user (or the device on which the cookie is stored) during or after the user's visit to an
online service. Temporary cookies, or "session cookies" or "transient cookies", are cookies that are deleted after a user
leaves an online offer and closes his browser. The content of a shopping cart in an online shop or a login status, for example, can
be stored in such a cookie. Cookies are referred to as "permanent" or "persistent" and remain stored even after the browser is closed.
For example, the login status can be saved if users visit it after several days. The interests of the users can also be stored in such
a cookie, which are used for range measurement or marketing purposes. Third-Party-Cookie" are cookies that are offered by other
providers than the responsible person who operates the online service (otherwise, if they are only their cookies, one speaks of "First-Party Cookies").

We may use temporary and permanent cookies and explain this in our privacy policy.

If we ask the user to consent to the use of cookies (e.g. in the context of a cookie consent), the legal basis for this processing is
Art. 6 Para. 1 lit. a. DSGVO. Otherwise, the personal cookies of the user will be stored according to the following explanations within
the framework of this data protection declaration on the basis of our legitimate interests (i.e. interest in the analysis,
optimisation and economic operation of our online offer in the sense of Art. 6 Para. 1 lit. f.). DSGVO) or insofar as the use of cookies
is necessary for the provision of our contract-related services, pursuant to Art. 6 Para. 1 letter b. DSGVO, or if the use of cookies
is necessary for the performance of a task in the public interest or in the exercise of official authority, pursuant to Art. 6 para. 1
lit. e. DSGVO, processed.

If users do not wish cookies to be stored on their computer, theyare asked to deactivate the corresponding option in the system
settings of their browser. Stored cookies can be deleted in the system settings of the browser. The exclusion of cookies can lead to
functional restrictions of this online offer.

A general objection to the use of cookies for online marketing purposes can be raised for a large number of services, especially in
the case of tracking, via the US website http://www.aboutads.info/choices/ or the EU website http://www.youronlinechoices.com/.

Furthermore, the storage of cookies can be achieved by switching them off in the browser settings. Please note that in this case not
all functions of this online offer can be used.


## Deletion of data

The data processed by us will be deleted in accordance with the statutory provisions or their processing will be restricted.
Unless expressly stated in this data protection declaration, the data stored by us will be deleted as soon as they are no longer 
required for their intended purpose and there are no legal obligations to retain them.

If the data are not deleted because they are required for other and legally permissible purposes, their processing will be restricted.
This means that the data will be blocked and not processed for other purposes. This applies, for example, to data that must be stored for
commercial or tax reasons.


## Changes and Updates to the Privacy Policy

We ask you to inform yourself regularly about the content of our data protection declaration. We will adapt the data protection declaration
as soon as changes in the data processing we carry out make this necessary. We will inform you as soon as the changes require your cooperation
(e.g. consent) or other individual notification.


## agency services

We process the data of our customers within the scope of our contractual services, which include conceptual and strategic consulting, 
campaign planning, software and design development / consulting or maintenance, implementation of campaigns and processes / handling, 
server administration, data analysis / consulting services and training services.

We process inventory data (e.g., customer master data, such as names or addresses), contact data (e.g., e-mail, telephone numbers),
content data (e.g., text entries, photographs, videos), contract data (e.g., subject matter of contract, term), payment data
(e.g., bank details, payment history), usage and metadata (e.g., within the scope of evaluating and measuring the success of marketing measures).
We do not process special categories of personal data in principle, unless these are components of a commissioned processing.
Affected parties include our customers, interested parties and their customers, users, website visitors or employees as well as third parties.
The purpose of the processing is the provision of contractual services, billing and our customer service. The legal basis for the processing 
results from Art. 6 para. 1 lit. b DSGVO (contractual services), Art. 6 para. 1 lit. DSGVO (analysis, statistics, optimisation, security measures).
We process data which are necessary for the justification and fulfilment of the contractual services and point out the necessity of their specification.
Disclosure to external parties only takes place if it is required within the framework of an order. When processing the data provided to us within 
the framework of an order, we shall act in accordance with the instructions of the customer and the statutory requirements for order processing 
pursuant to Art. 28 DSGVO and shall not process the data for any purposes other than those specified in the order.

We delete the data after expiration of legal warranty and comparable obligations. The necessity of the storage of the data is reviewed every three years;
in the case of legal archiving obligations the deletion takes place after their expiration (6 J, according to § 257 Abs. 1 HGB, 10 J, according to § 147 Abs. 1 AO).
In the case of data disclosed to us by the client within the scope of an order, we delete the data in accordance with the specifications of the order,
in principle after the end of the order.


## Administration, financial accounting, office organisation, contact management

We process data in the context of administrative tasks as well as the organisation of our business, financial accounting and compliance with 
legal obligations, such as archiving. Here we process the same data that we process within the framework of the provision of our contractual 
services. The processing bases are Art. 6 para. 1 lit. c. DSGVO, Art. 6 para. 1 lit. f. DSGVO. Customers, interested parties, business partners
and website visitors are affected by the processing. The purpose and our interest in the processing lies in the administration, financial accounting, 
office organization, archiving of data, i.e. tasks which serve the maintenance of our business activities, performance of our tasks and provision
of our services. The cancellation of the data with regard to contractual services and contractual communication corresponds to the data 
specified in these processing activities. 

We disclose or transmit data to the tax authorities, consultants, such as tax consultants or auditors, as well as other fee offices and payment service providers.

Furthermore, on the basis of our business interests, we store information on suppliers, organisers and other business partners, e.g. for the purpose of establishing
contact at a later date. This data, which is mainly company-related, is stored permanently.


## Economic analyses and market research

In order to run our business economically, to be able to recognise market trends, wishes of our contractual partners and users, we analyse the data available to us
on business transactions, contracts, enquiries, etc., in order to identify the most suitable and appropriate solutions for your needs. We process inventory data,
communication data, contract data, payment data, usage data, metadata on the basis of Art. 6 para. 1 lit. f. DSGVO, whereby the persons concerned include
contractual partners, interested parties, customers, visitors and users of our online service.

The analyses are carried out for the purpose of economic evaluations, marketing and market research. We can take into account the profiles of registered users with
information, e.g. on the services they have used. The analyses help us to increase user-friendliness, to optimise our range of products and services and to improve
business efficiency. The analyses serve us alone and are not disclosed externally unless they are anonymous  analyses with summarized values.

If these analyses or profiles are person-related, they will be deleted or anonymised upon termination by the user, otherwise after two years from the conclusion of
the contract. In addition, macroeconomic analyses and general trends are prepared anonymously wherever possible.


## Hosting and e-mailing

The hosting services used by us serve the provision of the following services: Infrastructure and platform services, computing capacity, storage space and database
services, e-mail dispatch, security services and technical maintenance services which we use for the purpose of operating this online service.

Here we, or our hosting provider, process inventory data, contact data, content data, contract data, usage data, meta data and communication data of customers,
interested parties and visitors to this online service on the basis of our legitimate interests in the efficient and secure provision of this online service in 
accordance with Art. 6 Para. 1 lit. f DSGVO in conjunction with Art. 28 DSGVO (conclusion of contract processing agreement).


## Collection of access data and log files

We, and/or our Hostinganbieter, raise on basis of our entitled interests in the sense of the art. 6 Abs. 1 lit. f. DSGVO Data about each access to the server on which
this service is located (so-called server log files). The access data includes the name of the website accessed, file, date and time of access, amount of data transferred,
notification of successful access, browser type and version, the user's operating system, referrer URL (the previously visited page), IP address and the requesting provider.

Log file information is stored for security reasons (e.g. for the clarification of abuse or fraud actions) for the duration of maximally 7 days and deleted afterwards.
Data, the further storage of which is necessary for evidence purposes, are excluded from deletion until the respective incident has been finally clarified.


## Online presences in social media

We maintain online presences within social networks and platforms in order to be able to communicate with customers, interested parties and users active there and
to inform them about our services.

We would like to point out that user data may be processed outside the European Union. This may entail risks for users, e.g. by making it more difficult to
enforce users' rights. With respect to US vendors certified under the Privacy Shield, we would like to point out that they are committed to
complying with EU privacy standards.

Furthermore, user data is usually processed for market research and advertising purposes. For example, user profiles can be created on the basis of user behaviour
and the resulting interests of users. The user profiles can in turn be used, for example, to place advertisements inside and outside the platforms which are
presumed to correspond to the interests of the users. For these purposes, cookies are usually stored on the user's computer, in which the user's usage behaviour
and interests are stored. Furthermore, data can be stored in the user profiles independently of the devices used by the users (especially if the users are
members of the respective platforms and are logged in to them).

The processing of users' personal data is carried out on the basis of our legitimate interests in effective information for users and communication with users 
pursuant to Art. 6 Para. 1 lit. f. DSGVO. If the users are requested by the respective providers of the platforms to give their consent to the aforementioned
data processing, the legal basis for the processing is Art. 6 Para. 1 lit. a., Art. 7 DSGVO.

For a detailed representation of the respective processing and the possibilities of objection (Opt-Out), we refer to the following linked information of the providers.

Also in the case of requests for information and the assertion of user rights, we point out that these can be asserted most effectively with the providers.
Only the providers have access to the data of the users and can directly take appropriate measures and provide information. If you still need help, please do not hesitate to contact us.

- Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA) - Privacy Statement / Opt-Out: http://instagram.com/about/legal/privacy/.
- Twitter (Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA) - Privacy Statement: https://twitter.com/de/privacy, Opt-Out: https://twitter.com/personalization, Privacy Shield: https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active.


## Integration of third-party services and content

Within the scope of our online offer, we act on the basis of our legitimate interests (i.e. interest in the analysis, optimisation and economic operation of our 
online offer within the meaning of Art. 6 Para. 1 lit. f. of the German Civil Code). DSGVO) content or service offers from third parties in order to integrate their
content and services, such as videos or fonts (hereinafter uniformly referred to as "content").

This always presupposes that the third-party providers of this content perceive the IP address of the user, since they would not be able to send the content to their browser without the IP address.
The IP address is therefore required for the presentation of these contents. We strive to use only those contents, whose respective offerers use the IP address only for the
distribution of the contents. Third parties may also use so-called pixel tags (invisible graphics, also known as "web beacons") for statistical or marketing purposes.
The "pixel tags" can be used to evaluate information such as visitor traffic on the pages of this website. The pseudonymous information may also be stored in cookies on the user's device
and may include technical information about the browser and operating system, referring websites, visit times and other information about the use of our website, as well as may be
linked to such information from other sources.


## Google Fonts

We incorporate the fonts ("Google Fonts") of the provider Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. According to Google, user data is used
solely for the purpose of displaying fonts in the user's browser. The integration takes place on the basis of our legitimate interests in a technically secure, maintenance-free
and efficient use of fonts, their uniform presentation and consideration of possible licensing restrictions for their integration. Privacy policy: https://www.google.com/policies/privacy/.


## Typekit fonts from Adobe

On the basis of our legitimate interests (i.e. interest in the analysis, optimisation and economic operation of our online offer in the sense of Art. 6 Para. 1 lit. f. of the German Civil Code),
we act in accordance with the following principles DSGVO) external "Typekit" fonts from Adobe Systems Software Ireland Limited, 4-6 Riverwalk, Citywest Business Campus, Dublin 24, Republic of Ireland.
Adobe is certified under the Privacy Shield Agreement, which guarantees compliance with European data protection laws.
`;
