"use client";
import React from "react";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const allCategories = [
  "Health and Wellness",
  "Education and Youth",
  "Environment and Sustainability",
  "Art, Culture, and Recreation",
  "Basic Needs and Support",
  "Civic Engagement and Volunteering",
  "Family and Senior Services",
  "Community Events and Programs",
  "Nonprofits and Charitable Organizations",
];
const categoryColors = {
  "Health and Wellness": "bg-green-600",
  "Education and Youth": "bg-blue-600",
  "Environment and Sustainability": "bg-emerald-700",
  "Art, Culture, and Recreation": "bg-violet-600",
  "Basic Needs and Support": "bg-amber-600",
  "Civic Engagement and Volunteering": "bg-teal-600",
  "Family and Senior Services": "bg-rose-600",
  "Community Events and Programs": "bg-sky-600",
  "Nonprofits and Charitable Organizations": "bg-indigo-700",
};

const resources = [
  {
    name: "Chester County Health Department",
    description:
      "Provides public health services including disease prevention, health education, and environmental health programs for Chester County residents.",
    location: "Chester County, PA",
    tel: "(610) 344 6225",
    url: "https://www.chesco.org/5556/Health",
    filter: [0],
  },
  {
    name: "Chester County Medical Society",
    description:
      "A professional organization supporting physicians and connecting patients with trusted medical resources throughout Chester County.",
    location: "Chester County, PA",
    tel: "(On Page)",
    url: "https://www.ccms.org/patient-community-resources",
    filter: [0],
  },

  {
    name: "ChesPenn Health Services",
    description:
      "Offers affordable primary care, dental, behavioral health, and social services to underserved populations.",
    location: "Chester & Delaware Counties, PA",
    tel: "(610) 485 3800",
    url: "https://chespenn.org/",
    filter: [0],
  },
  {
    name: "Phoenixville Free Clinic",
    description:
      "Provides free medical care to uninsured and low-income adults in the Phoenixville area.",
    location: "Phoenixville, PA",
    tel: "(610) 935 1134",
    url: "https://www.phoenixvillefreeclinic.org/",
    filter: [0],
  },
  {
    name: "Community Volunteers in Medicine",
    description:
      "Delivers free, high-quality healthcare services to low-income, uninsured residents through volunteer medical professionals.",
    location: "West Chester, PA",
    tel: "(610) 836 5990",
    url: "https://cvim.org/",
    filter: [0],
  },
  {
    name: "LCH Community Health",
    description:
      "Provides comprehensive healthcare services including primary care, dental, and behavioral health regardless of ability to pay.",
    location: "Kennett Square, PA",
    tel: "(610) 444 7550",
    url: "https://lchcommunityhealth.org/",
    filter: [0],
  },

  {
    name: "Paoli Hospital",
    description:
      "A full-service hospital offering emergency care, surgical services, and specialized medical treatment.",
    location: "Paoli, PA",
    tel: "(484) 565 100",
    url: "https://www.mainlinehealth.org/locations/paoli-hospital",
    filter: [0],
  },
  {
    name: "Phoenixville Hospital",
    description:
      "Provides comprehensive hospital services including emergency care, surgery, and outpatient programs.",
    location: "Phoenixville, PA",
    tel: "(610) 983 1000",
    url: "https://towerhealth.org/locations/phoenixville-hospital",
    filter: [0],
  },
  {
    name: "Chester County Hospital",
    description:
      "A Penn Medicine hospital offering advanced medical care, emergency services, and specialty treatment programs.",
    location: "West Chester, PA",
    tel: "(800) 789 7366",
    url: "https://www.pennmedicine.org/locations/entity/chester-county-hospital",
    filter: [0],
  },
  {
    name: "Coatesville Comprehensive Treatment Center",
    description:
      "Provides medication-assisted treatment and counseling services for individuals facing opioid and substance use disorders.",
    location: "Coatesville, PA",
    tel: "(866) 201 9790",
    url: "https://www.ctcprograms.com/location/coatesville-comprehensive-treatment-center/",
    filter: [0],
  },
  {
    name: "Gaudenzia Coatesville Outpatient",
    description:
      "Offers outpatient substance use and mental health treatment services focused on recovery and long-term wellness.",
    location: "Coatesville, PA",
    tel: "(833) 976 4357",
    url: "https://www.gaudenzia.org/location/coatesville-outpatient/",
    filter: [0],
  },
  {
    name: "Holcomb Behavioral Health Systems",
    description:
      "Delivers mental health, substance use, and community support services for individuals and families.",
    location: "Multiple locations, PA",
    tel: "(Numbers On Website)",
    url: "https://chimes.org/holcomb-behavioral-health-systems/",
    filter: [0],
  },
  {
    name: "MVP Recovery",
    description:
      "Provides outpatient recovery programs and support services for individuals overcoming substance use challenges.",
    location: "Chester County, PA",
    tel: "(855) 687 2410",
    url: "https://mvprecovery.org/outpatient-services/",
    filter: [0],
  },
  {
    name: "Chester County Food Bank",
    description:
      "Providing food and essential supplies to families in need in Chester County.",
    location: "Chester County, PA",
    tel: "(610) 873 6000",
    url: "https://chestercountyfoodbank.org/",
    filter: [4],
  },
  {
    name: "Community Warehouse Project Chester County",
    description:
      "Distributes household items and furniture to low-income families.",
    location: "Chester County, PA",
    tel: "(484) 473 4360",
    url: "https://communitywarehouseproject.com/",
    filter: [4],
  },
  {
    name: "Kennett Area Community Service",
    description:
      "Supports families in need with food, clothing, and emergency assistance.",
    location: "Kennett, PA",
    tel: "(610) 925 3556",
    url: "https://kacsimpact.org/",
    filter: [4],
  },
  {
    name: "United Way Southern Chester County",
    description:
      "Focuses on supporting basic needs, education, and financial stability for local families.",
    location: "Southern Chester County, PA",
    tel: "(610) 444 4357",
    url: "https://unitedwayscc.org/our-focus-areas",
    filter: [4],
  },
  {
    name: "Oxford Neighborhood Services Center",
    description:
      "Provides volunteer opportunities and resources for the local community.",
    location: "Oxford, PA",
    tel: "(610) 932 8557",
    url: "https://www.oxfordnsc.org/volunteer",
    filter: [4],
  },
  {
    name: "Meals on Wheels of Chester County",
    description:
      "Delivers meals to seniors and homebound residents in Chester County.",
    location: "Chester County, PA",
    tel: "(610) 430 8500",
    url: "https://mowcc.org/",
    filter: [4, 6],
  },
  {
    name: "Habitat for Humanity of Chester County",
    description:
      "Builds affordable housing and strengthens communities through volunteer projects.",
    location: "Chester County, PA",
    tel: "(610) 384 7993",
    url: "https://www.hfhcc.org/",
    filter: [4],
  },
  {
    name: "West Chester Food Cupboard",
    description:
      "Provides food assistance to individuals and families in West Chester.",
    location: "West Chester, PA",
    tel: "(610) 344 3175",
    url: "https://westchesterfoodcupboard.org/",
    filter: [4],
  },

  // Education & Youth
  {
    name: "The ARC of Chester County",
    description:
      "Supports children and adults with intellectual and developmental disabilities.",
    location: "Chester County, PA",
    tel: "(610) 696 8090",
    url: "https://arcofchestercounty.org/",
    filter: [1],
  },
  {
    name: "Avongrove School District",
    description: "Public school district serving the Avongrove area.",
    location: "Avongrove, PA",
    tel: "(610) 869 2441",
    url: "https://www.avongrove.org/",
    filter: [1],
  },
  {
    name: "Coatesville Area School District",
    description:
      "Provides education and resources for students in Coatesville.",
    location: "Coatesville, PA",
    tel: "(610) 466 2400",
    url: "https://www.casdschools.org/",
    filter: [1],
  },
  {
    name: "Downingtown Area School District",
    description:
      "School district offering educational programs for students in Downingtown.",
    location: "Downingtown, PA",
    tel: "(610) 269 8460",
    url: "https://www.dasd.org/",
    filter: [1],
  },
  {
    name: "Great Valley School District",
    description:
      "Education and resources for students in the Great Valley region.",
    location: "Malvern, PA",
    tel: "(610) 889 2100",
    url: "https://www.gvsd.org/",
    filter: [1],
  },
  {
    name: "Kennett Consolidated School District",
    description:
      "Public school district in Kennett supporting student growth and education.",
    location: "Kennett Square, PA",
    tel: "(610) 444 6600",
    url: "https://www.kcsd.org/",
    filter: [1],
  },
  {
    name: "Octorara School District",
    description: "Provides K-12 education to the Octorara community.",
    location: "Octorara, PA",
    tel: "(610) 593 8238  ",
    url: "https://www.octorara.k12.pa.us/",
    filter: [1],
  },
  {
    name: "Owen J. Roberts School District",
    description:
      "School district supporting student development in the Owen J. Roberts area.",
    location: "Pottstown, PA",
    tel: "(610) 469 5100",
    url: "https://www.ojrsd.com/",
    filter: [1],
  },
  {
    name: "Oxford Area School District",
    description: "Education resources and programs for students in Oxford, PA.",
    location: "Oxford, PA",
    tel: "(610) 932 6600",
    url: "https://www.oxfordasd.org/",
    filter: [1],
  },
  {
    name: "Phoenixville Area School District",
    description: "Supports education programs for Phoenixville students.",
    location: "Phoenixville, PA",
    tel: "(484) 927 5000",
    url: "https://www.pasd.com/",
    filter: [1],
  },
  {
    name: "Spring-Ford Area School District",
    description:
      "Provides public education services in the Spring-Ford region.",
    location: "Royersford, PA",
    tel: "(610) 705 6000",
    url: "https://www.spring-ford.net/",
    filter: [1],
  },
  {
    name: "Tredyffrin/Easttown School District",
    description:
      "School district supporting students in Tredyffrin and Easttown.",
    location: "Berwyn, PA",
    tel: "(610) 240 1900",
    url: "https://www.tesd.net/",
    filter: [1],
  },
  {
    name: "Twin Valley School District",
    description: "Educational programs for students in the Twin Valley region.",
    location: "Elverson, PA",
    tel: "(610) 286 8600",
    url: "https://www.tvsd.org/",
    filter: [1],
  },
  {
    name: "Unionville-Chadds Ford School District",
    description:
      "Provides K-12 education for students in the Unionville-Chadds Ford area.",
    location: "Chadds Ford, PA",
    tel: "(610) 347 0970",
    url: "https://www.ucfsd.org/",
    filter: [1],
  },
  {
    name: "West Chester Area School District",
    description: "Education and student support in West Chester.",
    location: "West Chester, PA",
    tel: "(484) 266 1000",
    url: "https://www.wcasd.net/",
    filter: [1],
  },

  // Environment & Sustainability
  {
    name: "Chester County Environmental Alliance",
    description:
      "Advocates for sustainable development and conservation in Chester County.",
    location: "Chester County, PA",
    tel: "N/A",
    url: "https://chescoenvt.org/",
    filter: [2],
  },
  {
    name: "Brandywine Conservancy",
    description:
      "Preserves land and water resources, promotes environmental stewardship.",
    location: "Chester County, PA",
    tel: "(610) 388 2700",
    url: "https://www.brandywine.org/conservancy",
    filter: [2],
  },
  {
    name: "Brandywine Red Clay Alliance",
    description:
      "Focuses on watershed protection, land conservation, and education programs.",
    location: "Chester County, PA",
    tel: "(610) 793 1090",
    url: "https://brandywineredclay.org/",
    filter: [2],
  },
  {
    name: "CRC Watershed Association",
    description:
      "Works to protect water quality and natural resources in local watersheds.",
    location: "Chester County, PA",
    tel: "",
    url: "https://www.crcwatersheds.org/",
    filter: [2],
  },
  {
    name: "Darby Creek Valley Association",
    description:
      "Conserves local creek ecosystems and promotes environmental awareness.",
    location: "Chester County, PA",
    tel: "(610) 359 1440",
    url: "https://www.dcva.org/",
    filter: [2],
  },
  {
    name: "Delaware River Keeper Network",
    description:
      "Protects and restores the Delaware River and its tributaries.",
    location: "PA",
    tel: "(215) 369 1188",
    url: "https://delawareriverkeeper.org/",
    filter: [2],
  },
  {
    name: "Elk Creeks Watershed Association",
    description:
      "Protects local waterways and educates the community about conservation.",
    location: "Chester County, PA",
    tel: "N/A",
    url: "https://www.elkcreekswatersheds.org/",
    filter: [2],
  },
  {
    name: "French & Pickering Creeks Conservation Trust",
    description:
      "Preserves land and watersheds for the benefit of the environment and public.",
    location: "Chester County, PA",
    tel: "(610) 933 7577",
    url: "https://frenchandpickering.org/",
    filter: [2],
  },
  {
    name: "Green Valleys Watershed Association",
    description:
      "Promotes environmental conservation and watershed protection.",
    location: "Chester County, PA",
    tel: "N/A",
    url: "https://greenvalleys.org/",
    filter: [2],
  },
  {
    name: "Natural Lands",
    description:
      "Protects open spaces, farmland, and natural areas across Pennsylvania.",
    location: "PA",
    tel: "(610) 353 5587",
    url: "https://www.natlands.org/",
    filter: [2],
  },
  {
    name: "Open Land Conservatory of Chester County",
    description: "Preserves land and natural habitats in Chester County.",
    location: "Chester County, PA",
    tel: "(610) 647 5380",
    url: "https://openlandconservancy.squarespace.com/",
    filter: [2],
  },
  {
    name: "Pennsbury Land Trust",
    description:
      "Works to conserve open space and provide public access to natural areas.",
    location: "Chester County, PA",
    tel: "(610) 388 7323",
    url: "https://pennsburylandtrust.org/",
    filter: [2],
  },
  {
    name: "Stroud Water Research Center",
    description:
      "Focuses on freshwater ecosystem research and watershed conservation.",
    location: "PA",
    tel: "(610) 268 2153",
    url: "https://stroudcenter.org/",
    filter: [2],
  },
  {
    name: "Valley Creek Restoration Partnership",
    description:
      "Restores streams and natural habitats in the Valley Creek region.",
    location: "PA",
    tel: "N/A",
    url: "https://vcrpblog.wordpress.com/",
    filter: [2],
  },
  {
    name: "Valley Forge Trout Unlimited",
    description: "Promotes conservation of local trout streams and watersheds.",
    location: "PA",
    tel: "N/A",
    url: "https://www.valleyforgetu.org/",
    filter: [2],
  },
  {
    name: "West Chester Fish, Game, and Wildlife Association",
    description:
      "Provides environmental education and promotes conservation activities.",
    location: "West Chester, PA",
    tel: "N/A",
    url: "https://www.wcfgwa.org/",
    filter: [2],
  },
  {
    name: "West Pikeland Land Trust",
    description:
      "Conserves natural lands and provides environmental education.",
    location: "PA",
    tel: "(610) 827 7660",
    url: "https://wplandtrust.org/",
    filter: [2],
  },
  {
    name: "White Clay Creek National Wild & Scenic River",
    description:
      "Preserves the White Clay Creek and promotes recreational and conservation activities.",
    location: "PA",
    tel: "(484) 716 6836",
    url: "https://whiteclay.org/",
    filter: [2],
  },
  {
    name: "Willistown Conservation Trust",
    description: "Protects natural lands and supports environmental education.",
    location: "PA",
    tel: "(610) 353 2562",
    url: "https://wctrust.org/",
    filter: [2],
  },
  // Arts, Culture & Recreation
  {
    name: "Chester County Libraries",
    description:
      "Provides access to books, digital resources, and community programs.",
    location: "Chester County, PA",
    tel: "(610) 344 5600 ",
    url: "https://chescolibraries.org/",
    filter: [3],
  },
  {
    name: "Uptown Knauer Performing Arts Center",
    description:
      "Offers summer camps and performance programs for students interested in the arts.",
    location: "West Chester, PA",
    tel: "(610) 356 ARTS",
    url: "https://uptownwestchester.org/the-studio-summer-camps/",
    filter: [3],
  },
  {
    name: "People’s Light",
    description:
      "Professional theater offering performances and educational programs.",
    location: "Malvern, PA",
    tel: "(610) 644 3500",
    url: "https://www.peopleslight.org/",
    filter: [3],
  },
  {
    name: "Pennsylvania Theater Institute",
    description: "Theater programs and camps for youth and adults in the arts.",
    location: "PA",
    tel: "N/A",
    url: "https://www.pennsylvaniatheatreinstitute.com/",
    filter: [3],
  },
  {
    name: "SALT Performing Arts",
    description: "Offers performing arts education and productions.",
    location: "PA",
    tel: "(610) 488 2585",
    url: "https://www.saltpa.com/",
    filter: [3],
  },
  {
    name: "The Springer Studio",
    description: "Provides art instruction and creative workshops.",
    location: "PA",
    tel: "N/A",
    url: "https://www.thespringerstudio.com/",
    filter: [3],
  },
  {
    name: "Chester County School of the Arts",
    description: "Offers music, dance, and art programs for all ages.",
    location: "PA",
    tel: "(484) 378 0047",
    url: "https://ccschoolofthearts.com/",
    filter: [3],
  },
  {
    name: "The Barley Sheaf Players",
    description: "Community theater productions and workshops.",
    location: "PA",
    tel: "(610) 363 7075",
    url: "https://www.barleysheaf.org/",
    filter: [3],
  },
  {
    name: "American Helicopter Museum & Education Center",
    description:
      "Museum showcasing helicopters and aviation history with educational programs.",
    location: "PA",
    tel: "610) 436 9600",
    url: "https://www.helicoptermuseum.org/",
    filter: [3],
  },
  {
    name: "Antique Ice Tool Museum",
    description: "Exhibits on ice tools and history.",
    location: "PA",
    tel: "(610) 738 7081",
    url: "https://www.antiqueicetoolmuseum.org/map/",
    filter: [3],
  },
  {
    name: "Brandywine Museum of Art",
    description: "Art museum featuring American art and exhibitions.",
    location: "Chadds Ford, PA",
    tel: "610.388 2700",
    url: "https://www.brandywine.org/museum",
    filter: [3],
  },
  {
    name: "Chester County Art Association",
    description: "Promotes art education and exhibitions in the community.",
    location: "West Chester, PA",
    tel: "(610) 696 5600",
    url: "https://www.chestercountyarts.org/",
    filter: [3],
  },
  {
    name: "Chester County History Center",
    description: "Preserves and shares the history of Chester County.",
    location: "West Chester, PA",
    tel: "(610) 692 4800",
    url: "https://mycchc.org/",
    filter: [3],
  },
  {
    name: "Yellow Springs",
    description: "Historic site with arts, gardens, and community programs.",
    location: "Chester Springs, PA",
    tel: "N/A",
    url: "https://yellowsprings.org/",
    filter: [3],
  },
  {
    name: "Longwood Gardens",
    description:
      "Botanical garden offering exhibitions, concerts, and classes.",
    location: "Kennett Square, PA",
    tel: "(610) 388 1000",
    url: "https://longwoodgardens.org/",
    filter: [3],
  },
  {
    name: "National Iron & Steel Heritage Museum",
    description: "Museum highlighting steel industry history and education.",
    location: "Coatesville, PA",
    tel: "(610) 384 9282",
    url: "https://www.steelmuseum.org/",
    filter: [3],
  },
  {
    name: "The Mill at Anselma Preservation and Educational Trust",
    description: "Historic gristmill offering educational programs and tours.",
    location: "Chester Springs, PA",
    tel: "(610) 827 1900",
    url: "https://anselmamill.org/",
    filter: [3],
  },
  {
    name: "The Woodlands at Phillips Mushroom Museum",
    description: "Exhibits and tours on mushroom cultivation history.",
    location: "Kennett Square, PA",
    tel: "(610) 444 2192",
    url: "https://www.thewoodlandsatphillips.com/mushroom-exhibit",
    filter: [3],
  },

  // Civic Engagement & Volunteering
  {
    name: "Phoenixville Free Clinic Volunteer",
    description:
      "Volunteer to support medical services for underserved communities.",
    location: "Phoenixville, PA",
    tel: "(610) 935 1134",
    url: "https://www.phoenixvillefreeclinic.org/how-to-volunteer",
    filter: [5],
  },
  {
    name: "Surrey Services for Seniors",
    description: "Volunteer to help seniors with programs and services.",
    location: "PA",
    tel: "(610) 566 0505",
    url: "https://surreyservices.org/volunteer/",
    filter: [5, 6],
  },
  {
    name: "Maternal and Child Health Consortium Volunteer",
    description: "Opportunities to support maternal and child health programs.",
    location: "PA",
    tel: "(610) 344 5370",
    url: "https://ccmchc.org/volunteer/",
    filter: [5],
  },
  {
    name: "Fiorenza’s Food for Friends Volunteer",
    description: "Volunteer to provide meals and support to those in need.",
    location: "PA",
    tel: "N/A",
    url: "https://www.f4service.org/contact-us/volunteer-opportunities/",
    filter: [5],
  },
  {
    name: "Safe Harbor of Chester County Volunteer",
    description: "Opportunities to assist at shelters and community programs.",
    location: "PA",
    tel: "N/A",
    url: "https://safeharborofcc.volunteerhub.com/vv2/",
    filter: [5],
  },
  {
    name: "Brandywine Valley SPCA Volunteer",
    description: "Help care for animals and assist with adoption events.",
    location: "PA",
    tel: "(302) 601 7000",
    url: "https://bvspca.org/get-involved/volunteer",
    filter: [5],
  },
  {
    name: "American Red Cross Delaware Valley Chapter Volunteer",
    description: "Volunteer for disaster relief and community programs.",
    location: "PA",
    tel: "(610) 750 8206",
    url: "https://www.redcross.org/local/pennsylvania/southeastern-pennsylvania/about-us/locations/delaware-valley-chapter.html?srsltid=AfmBOop1VQgcUNNxSXFCqdR8GpCx8NeH9frAo_u72myK-CpgXbgBPPkl",
    filter: [5],
  },
  {
    name: "Chester County OIC Volunteer",
    description:
      "Opportunities to assist workforce development and community programs.",
    location: "PA",
    tel: "(610) 692 2344",
    url: "https://ccoic.org/",
    filter: [5],
  },
  {
    name: "Mental Health Partnerships Volunteer",
    description: "Volunteer to support mental health programs and mentorship.",
    location: "PA",
    tel: "(800) 688 4226",
    url: "https://www.mentalhealthpartnerships.org/programs-and-services/compeer",
    filter: [5],
  },
  {
    name: "Community Volunteers in Medicine Volunteer",
    description: "Support medical outreach programs as a volunteer.",
    location: "PA",
    tel: "(610) 836 5990",
    url: "https://cvim.org/how-to-volunteer/",
    filter: [5],
  },
  {
    name: "Mighty Writers Volunteer",
    description:
      "Volunteer to help students improve writing skills and literacy.",
    location: "PA",
    tel: "N/A",
    url: "https://mightywriters.org/volunteer/",
    filter: [5],
  },
  {
    name: "Caring for Friends Volunteer",
    description: "Volunteer to prepare and distribute meals for those in need.",
    location: "PA",
    tel: "(215) 464 2224",
    url: "https://caringforfriends.org/get-involved/",
    filter: [5],
  },

  // Family & Senior Services
  {
    name: "Family Service of Chester County",
    description:
      "Provides counseling, support, and services for families and individuals.",
    location: "PA",
    tel: "(610) 696 4900",
    url: "https://www.familyservice.us/",
    filter: [6],
  },
  {
    name: "Caring for Friends",
    description:
      "Prepares and delivers meals to vulnerable populations in Chester County.",
    location: "PA",
    tel: "(215) 464 2224",
    url: "https://caringforfriends.org/",
    filter: [6],
  },
  {
    name: "Supplemental Nutrition Assistance Program (SNAP)",
    description:
      "Provides financial assistance for food to low-income families and seniors.",
    location: "PA",
    tel: "N/A",
    url: "https://www.pa.gov/agencies/dhs/resources/snap",
    filter: [6],
  },
  {
    name: "Amada Senior Care Chester County",
    description: "Senior care services including in-home care and support.",
    location: "Chester County, PA",
    tel: "(484) 653 6420 ",
    url: "https://www.amadaseniorcare.com/chester-county-senior-care/",
    filter: [6],
  },
  {
    name: "IKOR Eastern Pennsylvania",
    description:
      "Provides home care and support services for seniors and adults.",
    location: "Eastern PA",
    tel: "(855) 367 4567",
    url: "https://ikorepa.com/",
    filter: [6],
  },
  {
    name: "Pharmaceutical Contract for the Elderly",
    description:
      "Assistance program providing prescription support for seniors.",
    location: "PA",
    tel: "N/A",
    url: "https://www.pa.gov/services/aging/apply-for-the-pharmaceutical-assistance-contract-for-the-elderly",
    filter: [6],
  },
  {
    name: "Kiddie Academy of Downingtown",
    description: "Childcare services and early learning programs for families.",
    location: "Downingtown, PA",
    tel: "(484) 378 3980",
    url: "https://kiddieacademy.com/academies/downingtown/about-us/?utm_source=Localiq&utm_medium=CPC&utm_campaign=Downingtown&scid=4838673&kw=613595&pub_cr_id=744910390001&device=c&network=g&targetid=kwd-299871558165&loc_interest_ms=&loc_physical_ms=9007376&tc=CjwKCAjwr8LHBhBKEiwAy47uUlXtnsR8-Ns36vFJZexYwQ1zj-b5l7Vbfr7MTJ250O-l8BWOnH4AHxoCOwIQAvD_BwE&rl_key=6a8d8458f92d483a564a670c162a07c5&gad_source=1&gad_campaignid=22416103659&gbraid=0AAAAA_PzHpctBOGcfdngGSGXqFISVUfe9&gclid=CjwKCAjwr8LHBhBKEiwAy47uUlXtnsR8-Ns36vFJZexYwQ1zj-b5l7Vbfr7MTJ250O-l8BWOnH4AHxoCOwIQAvD_BwE",
    filter: [6],
  },
  {
    name: "Celebree School of Chester Springs, PA",
    description: "Childcare and early learning programs in Chester Springs.",
    location: "Chester Springs, PA",
    tel: "(610) 900 6914",
    url: "https://www.celebree.com/chester-springs-pa/?provider=google&trkid=V3ADW708624_____x_c__&gad_source=1&gad_campaignid=23003158244&gbraid=0AAAAADGxGYOAAHH5ez604bhtGDfICpsia&gclid=CjwKCAjwr8LHBhBKEiwAy47uUnsXQFkWsNhCxsdzjemSHaGCObjFyR_3BxTL__fB6pkLxX-TsOBkyBoCu4oQAvD_BwE",
    filter: [6],
  },
  {
    name: "Gordon Early Literacy Center",
    description: "Early literacy and educational programs for children.",
    location: "PA",
    tel: "(484) 237 5000",
    url: "https://www.cciu.org/programs/early-learning",
    filter: [6],
  },
  {
    name: "Warwick Childcare Center Chester County",
    description: "Childcare services for families in Chester County.",
    location: "Chester County, PA",
    tel: "(610) 583 2273",
    url: "https://www.todayschild.us/apps/pages/ChesterCounty",
    filter: [6],
  },
  {
    name: "YMCA of Greater Brandywine Childcare",
    description: "Before and after school childcare programs.",
    location: "PA",
    tel: "(On Website)",
    url: "https://ymcagbw.org/before-and-after-school-childcare#faq-question-1400365156",
    filter: [6],
  },
];
const SearchResources = ({ placeholder = "Search resources..." }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredResources = resources.filter((res) => {
    const matchesName = res.name.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      selectedCategory === null || res.filter.includes(selectedCategory);

    return matchesName && matchesCategory;
  });

  return (
    <section className="py-40 flex flex-col items-center">
      <h1 className="text-3xl mb-10 font-bold">
        Explore Resources
      </h1>

      {/* Search Bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center bg-white rounded-2xl shadow-sm px-4 py-3 w-4/5 mb-6"
      >
        <IoIosSearch className="text-gray-400 text-xl mr-3" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 outline-none text-gray-700"
        />
      </form>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center w-4/5">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-xl border ${
            selectedCategory === null
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          All
        </button>

        {allCategories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(i)}
            className={`px-4 py-2 rounded-xl text-white ${
              selectedCategory === i
                ? categoryColors[cat]
                : `" ${categoryColors[cat]} opacity-60 hover:opacity-100"`
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5">
        {filteredResources.length > 0 ? (
          filteredResources.map((res, i) => <NewResource key={i} {...res} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No resources found.
          </p>
        )}
      </div>
    </section>
  );
};

/* =======================
   RESOURCE CARD
======================= */

const NewResource = ({ name, description, location, tel, url, filter }) => {
  return (
    <div className="bg-white rounded-3xl border-2 border-gray-300 p-5 hover:shadow-xl hover:-translate-y-2 duration-200">
      <div className="mb-4">
        {filter.map((cat) => (
          <span
            key={cat}
            className={`${
              categoryColors[allCategories[cat]]
            } text-white text-sm px-2 py-1 rounded-xl mr-2 mb-1 block w-fit`}
          >
            {allCategories[cat]}
          </span>
        ))}
      </div>

      <h2 className="text-lg mb-2">{name}</h2>
      <p className="text-gray-700 mb-6">{description}</p>

      <p className="text-gray-700 text-sm mb-1">
        <i className="bi bi-geo-alt mr-1 text-blue-600"></i>
        {location}
      </p>
      <p className="text-gray-700 text-sm">
        <i className="bi bi-telephone mr-1 text-blue-600"></i>
        {tel}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex justify-center border-2 border-blue-600 text-blue-600 rounded-lg py-2 hover:bg-blue-600 hover:text-white duration-100"
      >
        Visit Website
      </a>
    </div>
  );
};

export default SearchResources;

// const SearchResources = ({ placeholder = "Search resources..." }) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <section className="py-40 flex items-center flex-col">
//       <h1
//         className="text-3xl mb-10 bg-gradient-to-br from-blue-600 to-blue-300 text-transparent  bg-clip-text hover:skew-x-15 hover:scale-110 hover:-skew-y-3 duration-100"
//         id="ExploreResourcesHeader"
//       >
//         Explore Resources
//       </h1>
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center bg-white rounded-2xl shadow-sm px-4 py-3 w-4/5 mb-5 focus-within:outline-3 outline-gray-400 duration-200"
//       >
//         <IoIosSearch className="text-gray-400 text-xl mr-3" />

//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder={placeholder}
//           className="flex-1 outline-none text-gray-700 placeholder-gray-400"
//         />

//         <button
//           type="submit"
//           className="ml-3 bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition"
//         >
//           Search
//         </button>
//       </form>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5">
//         {resources.map((_, i) => (
//           <NewResource
//             key={i}
//             name={_.name}
//             description={_.description}
//             location={_.location}
//             tel={_.tel}
//             url={_.url}
//             filter={_.filter}
//           ></NewResource>
//         ))}
//       </div>
//     </section>
//   );
// };

// const NewResource = (props) => {
//   const { name, description, location, tel, url, filter } = props;
//   return (
//     <div className="flex flex-col bg-white rounded-3xl w-100 py-3 hover:shadow-xl duration-200 ease-in border-2 border-gray-300 hover:-translate-y-2 mb-5">
//       <div className="mx-5">
//         <div className="mb-4 mt-2">
//           {filter.map((_, i) => (
//             <div
//               className={`${
//                 categoryColors[allCategories[_]]
//               } w-max px-2 py-1 rounded-xl text-sm text-white mb-3`}
//               key={_}
//             >
//               {allCategories[_]}
//             </div>
//           ))}
//         </div>
//         <h1 className="text-lg">{name}</h1>
//         <p className="text-gray-700 mb-8">{description}</p>
//         <p className="text-gray-700 mb-1">
//           <i className="bi bi-geo-alt mr-1 text-blue-600"></i> {location}
//         </p>
//         <p className="text-gray-700">
//           <i className="bi bi-telephone mr-1 text-blue-600"></i> {tel}
//         </p>
//         <a
//           href={url}
//           target="_blank"
//           className="w-full border-2 border-blue-600 text-blue-600 flex justify-center rounded-lg py-1 gap-3 mt-3 hover:bg-blue-600 hover:text-white duration-100 group"
//         >
//           Visit Website
//           <i className="bi bi-box-arrow-up-right text-blue-600 group-hover:text-white"></i>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SearchResources;
