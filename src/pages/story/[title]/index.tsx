// import router, { useRouter } from "next/router";

import StoryPage from "../../../components/Story/StoryPage";

export default StoryPage;

// type Props = {};

// function Index({}: Props) {
//   //   const { pid } = router.query;
//   const { query } = useRouter();

//   console.log(query);
//   return (
//     // <div className="bg-gray-500 p-4 text-white">
//     //   <div id="speakable-summary">
//     //     Anyone who has followed global news events of late will have noticed the
//     //     devastating floods that have engulfed pretty much every corner of the
//     //     world,{" "}
//     //     <a
//     //       href="https://www.theguardian.com/us-news/2022/aug/11/america-summer-floods-rainfall-climate-crisis"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       from the U.S
//     //     </a>
//     //     . and{" "}
//     //     <a
//     //       href="https://www.science.org/content/article/europe-s-deadly-floods-leave-scientists-stunned"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Europe
//     //     </a>
//     //     , to{" "}
//     //     <a
//     //       href="https://foreignpolicy.com/2022/09/28/floods-west-africa-nigeria-niger-chad-cameroon-food-supply/"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Africa
//     //     </a>
//     //     ,{" "}
//     //     <a
//     //       href="https://www.bbc.co.uk/news/world-australia-61991112"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Australia
//     //     </a>{" "}
//     //     and Asia,{" "}
//     //     <a href="https://techcrunch.com/2022/09/07/bangalore-india-floods-startups/">
//     //       where India
//     //     </a>{" "}
//     //     and Pakistan{" "}
//     //     <a
//     //       href="https://www.economist.com/asia/2022/08/30/pakistan-has-been-hit-by-its-worst-floods-in-recent-memory"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       have been hit by some of their worst floods in recent memory
//     //     </a>
//     //     .
//     //   </div>
//     //   <p>
//     //     By pretty much all accounts, such{" "}
//     //     <a
//     //       href="https://www.theguardian.com/environment/2022/sep/15/pakistan-floods-made-up-to-50-worse-by-global-heating"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       climate change-driven
//     //     </a>{" "}
//     //     disasters are{" "}
//     //     <a
//     //       href="https://edition.cnn.com/2022/08/03/us/extreme-flooding-adaptation-climate/index.html"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       only going to get worse
//     //     </a>
//     //     . And while there are varying opinions on what &#8212; if anything
//     //     &#8212; we can do to avert such catastrophes in the future, some
//     //     companies are looking at ways to plan for this new reality, and at least
//     //     go some way toward mitigating the impact of flooding.
//     //   </p>
//     //   <p>
//     //     One of these companies is{" "}
//     //     <a
//     //       href="https://www.7analytics.no/"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       7Analytics
//     //     </a>
//     //     , a Norwegian startup founded back in 2020 by a team of data scientists
//     //     and geologists to reduce the risks of flooding for construction and
//     //     energy infrastructure companies. With its first product,{" "}
//     //     <a
//     //       href="https://www.7analytics.no/project-1?lang=en"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       FloodCube
//     //     </a>
//     //     , 7Analytics serves customers with AI and advanced machine learning
//     //     techniques to calculate current surface water and where it&#8217;s
//     //     flowing today (the &#8220;runoff&#8221;), then models how that will look
//     //     in the future with increased rainfall.
//     //   </p>
//     //   <p>
//     //     So in effect, FloodCube is more about predicting <em>how</em> a flood
//     //     will unfold, showing exactly where water is likely to accumulate based
//     //     on various environmental factors. While it&#8217;s possible to achieve
//     //     this already today through combining multiple software programs and
//     //     manual calculations, FloodCube brings everything together under one
//     //     roof.
//     //   </p>
//     //   <div>
//     //     <div>
//     //       <img
//     //         // aria-describedby="caption-attachment-2412594"
//     //         // loading="lazy"
//     //         // className="size-full wp-image-2412594"
//     //         src="https://techcrunch.com/wp-content/uploads/2022/09/Floodcube-example2.jpg"
//     //         alt=""
//     //         // width="1024"

//     //         // height="516"
//     //         srcSet="https://techcrunch.com/wp-content/uploads/2022/09/Floodcube-example2.jpg 1541w, https://techcrunch.com/wp-content/uploads/2022/09/Floodcube-example2.jpg?resize=150,76 150w, https://techcrunch.com/wp-content/uploads/2022/09/Floodcube-example2.jpg?resize=300,151 300w, https://techcrunch.com/wp-content/uploads/2022/09/Floodcube-example2.jpg?resize=768,387 768w, https://techcrunch.com/wp-content/uploads/2022/09/Floodcube-example2.jpg?resize=680,342 680w, https://techcrunch.com/wp-content/uploads/2022/09/Floodcube-example2.jpg?resize=1536,773 1536w, https://techcrunch.com/wp-content/uploads/2022/09/Floodcube-example2.jpg?resize=1200,604 1200w, https://techcrunch.com/wp-content/uploads/2022/09/Floodcube-example2.jpg?resize=50,25 50w"
//     //         // sizes="(max-width: 1024px) 100vw, 1024px"
//     //       />
//     //       <p id="caption-attachment-2412594" className="wp-caption-text">
//     //         FloodCube in action.{" "}
//     //         <em>
//     //           <strong>Image Credits: </strong>7Analytics
//     //         </em>
//     //       </p>
//     //     </div>
//     //   </div>
//     //   <h2>Show me the data</h2>
//     //   <p>
//     //     As with just about any AI and ML-infused software, large datasets are
//     //     pivotal to 7Analytics&#8217; promise &#8212; it gathers data from openly
//     //     available sources spanning digital elevation models (
//     //     <a
//     //       href="https://en.wikipedia.org/wiki/Digital_elevation_model"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       DEM
//     //     </a>
//     //     ) for terrain, satellite imaging and climate data, then integrates these
//     //     sources to make it easier for users to derive insights from. Its
//     //     customers include the Municipality of Bergen, where 7Analytics is
//     //     headquartered, multinational construction giant{" "}
//     //     <a
//     //       href="https://en.wikipedia.org/wiki/Skanska"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Skanska
//     //     </a>{" "}
//     //     and engineering consultancy{" "}
//     //     <a
//     //       href="https://en.wikipedia.org/wiki/Multiconsult"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Multiconsult
//     //     </a>
//     //     . And this gives a strong indication as to <em>who</em> 7Analytics is
//     //     targeting, and who is most likely to care about predicting future
//     //     flooding scenarios &#8212; protecting urban infrastructure is very much
//     //     the name of the game here.
//     //   </p>
//     //   <p>
//     //     &#8220;Today, most developers and real estate owners know very little
//     //     about their exposure to flood risk,&#8221; 7Analytics co-founder Jonas
//     //     Toland told TechCrunch. &#8220;We close this gap with a high-precision
//     //     risk tool.&#8221;
//     //   </p>
//     //   <div className="piano-inline-promo"></div>
//     //   <p>
//     //     While its technology is mainly used by construction companies in Norway
//     //     for now, 7Analytics is expanding into new areas such as energy
//     //     infrastructure, and is currently in talks with a handful of energy
//     //     companies in the U.S. To help, 7Analytics&#8217; has partnered with{" "}
//     //     <a
//     //       href="https://en.wikipedia.org/wiki/StormGeo"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       StormGeo
//     //     </a>
//     //     , a weather service and meteorological company that essentially tailors
//     //     risk data for specific business use cases &#8212; such as disaster
//     //     management in ship-routing, or energy production sites. In short,
//     //     7Analytics is helping StormGeo &#8220;enhance&#8221; its existing
//     //     offering to its oil and gas customers, which includes companies in
//     //     Houston, Texas.
//     //   </p>
//     //   <p>
//     //     &#8220;Our product takes a real-time StormGeo weather forecast &#8212;
//     //     for example, the risk of rainfall tomorrow &#8212; and translates it
//     //     into actionable risk info, such as their site is at risk of x-inches of
//     //     flooding tomorrow,&#8221; Toland explained. &#8220;This information can
//     //     be used to inform them whether their staff will be able to use the
//     //     parking lot, or to reroute supply trucks [for example].&#8221;
//     //   </p>
//     //   <h2>Startups to the rescue?</h2>
//     //   <p>
//     //     Recent data from reinsurance company Swiss Re suggests that extreme
//     //     global weather events{" "}
//     //     <a
//     //       href="https://www.scientificamerican.com/article/global-weather-disasters-cost-101-billion-in-2021/"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       cost insurers $101 billion last year
//     //     </a>
//     //     , apparently only the third time since 1970 this figure has surpassed
//     //     $100 billion. And Hurricane Ida alone reportedly{" "}
//     //     <a
//     //       href="https://apnews.com/article/business-environment-and-nature-louisiana-392d8001a9c69df607d9a7b5b84474fa"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       caused at least $50 billion in damages
//     //     </a>
//     //     , depending on which figures we&#8217;re to believe. As such,
//     //     we&#8217;re seeing all manner of climate-tech startups enter the fray,
//     //     even companies that weren&#8217;t initially focused on climate at all.
//     //     Yesterday, TechCrunch{" "}
//     //     <a href="https://techcrunch.com/2022/09/28/vrais-brings-vr-simulation-training-to-offshore-wind-and-other-hazardous-industries/">
//     //       wrote about a six-year-old company called VRAI
//     //     </a>
//     //     , which initially delivered VR simulation training to the aerospace and
//     //     defence sectors, but is now expanding into renewable energy, where it
//     //     will focus on helping to upskill the European workforce and support
//     //     plans to increase offshore wind energy capacity in the coming decade.
//     //   </p>
//     //   <p>
//     //     Elsewhere, Australia&#8217;s FloodMapp{" "}
//     //     <a
//     //       href="https://www.floodmapp.com/post/union-square-ventures-leads-floodmapp-s-6m-seed-round"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       recently raised
//     //     </a>{" "}
//     //     $8.5 million to{" "}
//     //     <a href="https://techcrunch.com/2021/08/18/floodmapp-climate-change-flooding/">
//     //       serve real-time flood forecasts
//     //     </a>
//     //     , while last year we wrote about New York-based Forerunner, which{" "}
//     //     <a href="https://techcrunch.com/2021/09/08/forerunner-flood-management/">
//     //       is developing a flood plain management platform
//     //     </a>
//     //     .
//     //   </p>
//     //   <p>
//     //     To take things to the next level now that it&#8217;s officially entered
//     //     the U.S. market, 7Analytics today announced that it has raised $2.5
//     //     million in a seed round of funding led by sustainability-focused VC firm{" "}
//     //     <a
//     //       href="https://momentumpartners.no/"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Momentum Partners
//     //     </a>
//     //     , with participation from{" "}
//     //     <a
//     //       href="https://www.constructventure.no/?locale=en"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Construct Venture
//     //     </a>{" "}
//     //     and Obos VC. While this funding will help 7Analytics expand both in
//     //     Europe and the U.S., the company said that it eventually plans to use
//     //     its technology to model for other &#8220;nature risks,&#8221; including
//     //     landslides and biodiversity.
//     //   </p>
//     //   <p>
//     //     &#8220;Everything we build is rigged for global use, so we are scaling
//     //     our model fast across continents,&#8221; Toland said. &#8220;At the same
//     //     time, we need to consider that our cities are different both in terms of
//     //     topography, climate and how they are built. Our models are easy to adapt
//     //     for new use cases which is underlined by the various customer groups we
//     //     have onboarded &#8212; from construction developers to municipal
//     //     caseworkers and infrastructure owners.&#8221;
//     //   </p>
//     //   <p>
//     //     <a
//     //       rel="nofollow"
//     //       href="https://techcrunch.com/2022/09/29/as-extreme-weather-events-worsen-7analytics-meshes-ai-and-big-data-to-predict-flooding/"
//     //     >
//     //       As extreme weather events worsen, 7Analytics meshes AI and big data to
//     //       predict flooding
//     //     </a>{" "}
//     //     by{" "}
//     //     <a rel="nofollow" href="https://techcrunch.com/author/paul-sawers/">
//     //       Paul Sawers
//     //     </a>{" "}
//     //     originally published on{" "}
//     //     <a rel="nofollow" href="https://techcrunch.com">
//     //       TechCrunch
//     //     </a>
//     //   </p>
//     // </div>

//     <div></div>
//   );
// }

// export default Index;
