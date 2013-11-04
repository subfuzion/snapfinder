SNAPfinder
==========

snapfinder.org

#### Related Projects
* [snapfinder-lib]
* [snapfinder-api]

Introduction
------------
SNAPfinder is a mobile-first app for locating retailers that participate in the SNAP (formerly known as Food Stamps) program. It uses data provided by the USDA and imported daily into a MongoDB database to return nearby retailers for a given address, region, or geographic area in U.S. This project depends on two other open source projects: snapfinder-lib and snapfinder-api, which together provide the support for the cloud-hosted REST API this app uses. In addition to using this app, the REST API is available to developers to build their own SNAP applications.

SNAPfinder is developed as a collaboration between the GSA and the private sector, sponsored by [ITSource Technology Inc.][ITSource], as an Open Source project in support of the Federal Government's commitment to Open Data.

The project is Open Source under the MIT License.


Goals
-----
* To make a positive contribution to society by leveraging Open Data
* To demonstrate a successful model of Open Source collaboration between a Federal Agency and the private sector development community
* To provide a well-documented example of creating and hosting a REST API based on Node and MongoDB. Development, version control, testing, and hosting can be done using free, cloud-based tools and services accessible from any computer with access to a browser.


What is SNAP?
-------------
[SNAP][USDA] stands for the Supplemental Nutrition Assistance Program mandated by the Federal Government and supervised by states to help millions of individuals and families who need financial assistance to buy food. Formerly known as the Food Stamp Program, SNAP provides an economic benefit as well as well as serving to eliminate hunger.
Today, instead of food stamps, eligible recipients are issued Electronic Benefit Transfer (EBT) cards. These cards can be used to purchase food and beverage items authorized by the USDA's SNAP program at retailers that accept EBT transactions.

The [USDA Food and Nutrition Service][USDA] maintains and publishes a list of retailers (vendors) across the country that welcome SNAP EBT customers. Data is stored in files in Comma Separated Value (CSV) format, which typically can be read by spreadsheet programs, such as Microsoft Excel.


SNAP Data
---------
[SNAP Retailer Locator][SNAP] data is harvested from data published by the [USDA Food and Nutrition Service][USDA] at the following URL:

* http://www.snapretailerlocator.com/export/Nationwide.zip


[API]:               https://github.com/tonypujals/snapfinder-lib/wiki/
[ITSource]:          http://www.itsourcetek.com/
[SNAP]:              http://www.snapretailerlocator.com/
[USDA]:              http://www.fns.usda.gov/snap/
[CRONIO]:            http://cronio.io/
[MongoLab]:          https://mongolab.com/
[GitHub]:            https://github.com/
[C9Chrome]:          https://chrome.google.com/webstore/detail/cloud9-button-for-github/gkddhhofgajgmgfebhaiihlahjmjkmph?hl=en-US
[Cloud9]:            https://c9.io/
[snapfinder-lib]:    https://github.com/tonypujals/snapfinder-lib
[snapfinder-api]:    https://github.com/tonypujals/snapfinder-api

