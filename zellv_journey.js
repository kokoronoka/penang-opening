const years = ['2000','2007','2008','2009','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2026'];

const labels = {
  map: { en: 'OUR LOCATIONS', zh: '我们的据点' },
  vision: { en: 'OUR VISION', zh: '我们的愿景' },
  'year-2000': { en: '2000 · THE BEGINNING OF A DREAM', zh: '2000 · 梦想的开始' },
  'year-2007': { en: '2007 · BRAND TRANSFORMATION', zh: '2007 · 品牌蜕变' },
  'year-2008': { en: '2008 · LAYING THE GROUNDWORK', zh: '2008 · 奠定基础' },
  'year-2009': { en: '2009-2010 · STEADY EXPANSION & CONTINUED GROWTH', zh: '2009-2010 · 稳健拓展，持续成长' },
  'year-2011': { en: '2011 · BUILDING ON THE WORLD STAGE', zh: '2011 · 站上国际舞台' },
  'year-2012': { en: '2012 · CROSSING BORDERS', zh: '2012 · 跨越边境' },
  'year-2013': { en: '2013 · A NEW STAGE OF GROWTH', zh: '2013 · 跨越成长' },
  'year-2014': { en: '2014 · BRAND UPGRADE', zh: '2014 · 品牌升级' },
  'year-2015': { en: '2015 · A NEW WELLNESS HOME', zh: '2015 · 全新健康基地' },
  'year-2016': { en: '2016 · GOING REGIONAL', zh: '2016 · 邁向區域' },
  'year-2017': { en: '2017 · NEW PRODUCTS, NEW RECOGNITION', zh: '2017 · 新品與新榮譽' },
  'year-2018': { en: '2018 · BEST IN ASIA PACIFIC', zh: '2018 · 亞太之最' },
  'year-2019': { en: '2019 · GLOBAL RECOGNITION', zh: '2019 · 全球肯定' },
  'year-2020': { en: '2020 · SAME ROOT, SAME DREAM', zh: '2020 · 同根同夢' },
  'year-2021': { en: '2021 · ADAPTING & INNOVATING', zh: '2021 · 順應變化，持續創新' },
  'year-2022': { en: '2022 · RECOGNITION & REGIONAL TIES', zh: '2022 · 榮譽與區域聯繫' },
  'year-2023': { en: '2023 · A LANDMARK YEAR', zh: '2023 · 重要里程碑' },
  'year-2024': { en: '2024 · EXPANDING HORIZONS', zh: '2024 · 拓展新版圖' },
  'year-2026': { en: '2026 · A NEW ERA OF WELLNESS', zh: '2026 · 开启 Wellness 新时代' },
  'state-ipoh': { en: 'IPOH · STEADY EXPANSION', zh: '怡保 · 稳健拓展' },
  'state-kuantan': { en: 'KUANTAN · REACHING FURTHER EAST', zh: '关丹 · 向东拓展' },
  'state-kl-2007': { en: 'KUALA LUMPUR · WHERE IT ALL BEGAN', zh: '吉隆坡 · 品牌起点' },
  'state-kl-2009': { en: 'KUALA LUMPUR · TAKING TO THE ROAD', zh: '吉隆坡 · 巡回路演' },
  'state-kl-2010': { en: 'KUALA LUMPUR · A HOME OF OUR OWN', zh: '吉隆坡 · 属于自己的家' },
  'state-kl-2011': { en: 'KUALA LUMPUR · CLOSER TO CUSTOMERS', zh: '吉隆坡 · 贴近顾客' },
  'state-kl-2012': { en: 'KUALA LUMPUR · A NEW STOREFRONT', zh: '吉隆坡 · 全新店面' },
  'state-kl-2014': { en: 'KUALA LUMPUR · INVESTING IN HOME', zh: '吉隆坡 · 深耕总部' },
  'state-kl-2019': { en: 'KUALA LUMPUR · REPROGRAMMING CELLS', zh: '吉隆坡 · 细胞再编程' },
  'state-johor-2010': { en: 'JOHOR · A NEW FRONTIER SOUTH', zh: '柔佛 · 南部新据点' },
  'state-johor-2023': { en: 'JOHOR · A WELLNESS DESTINATION', zh: '柔佛 · 健康新据点' },
  'state-melaka-2010': { en: 'MELAKA · GROWING THE NETWORK', zh: '马六甲 · 版图扩展' },
  'state-melaka-2020': { en: 'MELAKA · A SECOND CHAPTER', zh: '马六甲 · 全新篇章' },
  'state-kelantan': { en: 'KELANTAN · EXTENDING NORTH', zh: '吉兰丹 · 向北延伸' },
  tbc: { en: 'TO BE CONTINUED', zh: '敬请期待' }
};

// ---- Language switching: every translatable string lives here, keyed to
// match a data-i18n attribute in the HTML. Reused keys (e.g. tc-2000-h3)
// drive both the timeline card and the matching year page's own heading,
// so the two never drift out of sync with each other.
const translations = {
  'status-label': { en: 'OUR JOURNEY', zh: '我们的旅程' },
  'splash-eyebrow': { en: 'Welcome To', zh: '欢迎莅临' },
  'splash-h1': { en: 'Our Journey', zh: '我们的旅程' },
  'splash-taphint': { en: 'TAP ANYWHERE TO BEGIN', zh: '点击屏幕任意处开始' },

  'map-eyebrow': { en: 'Zéll-V Across Malaysia', zh: 'ZÉLL-V 遍布马来西亚' },
  'map-h2': { en: 'Our Locations', zh: '我们的据点' },
  'map-sub': { en: 'Tap a state to explore', zh: '点选州属探索' },
  'map-scroll-hint': { en: 'Scroll for More States', zh: '向下滑动查看更多州属' },
  'map-coming-soon': { en: 'Coming Soon', zh: '敬请期待' },

  'state-perlis': { en: 'Perlis', zh: '玻璃市' },
  'state-kedah': { en: 'Kedah', zh: '吉打' },
  'state-penang': { en: 'Penang', zh: '槟城' },
  'state-ipoh': { en: 'Ipoh', zh: '怡保' },
  'state-kelantan': { en: 'Kelantan', zh: '吉兰丹' },
  'state-terengganu': { en: 'Terengganu', zh: '登嘉楼' },
  'state-kuantan': { en: 'Kuantan', zh: '关丹' },
  'state-selangor': { en: 'Selangor', zh: '雪兰莪' },
  'state-kl': { en: 'Kuala Lumpur', zh: '吉隆坡' },
  'state-negerisembilan': { en: 'Negeri Sembilan', zh: '森美兰' },
  'state-melaka': { en: 'Melaka', zh: '马六甲' },
  'state-johor': { en: 'Johor', zh: '柔佛' },

  'vision-eyebrow': { en: 'Our Vision', zh: '我们的愿景' },
  'vision-h2': { en: 'From Beauty to Wellness, From Local to Global.', zh: '从美丽走向健康，从本地走向世界。' },
  'vision-p': { en: 'Beginning with beauty, driven by a mission for health. Moving forward, we integrate advanced technologies, precision health management and professional medical concepts to build a trusted, one-stop Wellness brand.', zh: '从美丽出发，以健康为使命。未来，我们将持续融合国际先进科技、精准健康管理与专业医疗理念，打造得信赖的一站式 Wellness 品牌。<br><br>我们相信，真正的美丽源于健康，真正的健康始于细胞。<br><br>未来，我们将继续以创新为动力，以专业为基础，以关怀为核心，陪伴更多人迈向健康、年轻、高品质的人生，并把 Wellness 的价值，从马来西亚带向世界。' },
  'hero-years': { en: 'Years', zh: '年' },
  'hero-cap-1': { en: 'of Passion.', zh: '热忱如一' },
  'hero-cap-2': { en: 'One Vision.', zh: '同一愿景' },
  'hero-cap-3': { en: 'Endless Possibilities.', zh: '无限可能' },
  'hero-closing': { en: '26 years of staying true to our original aspiration and continuously innovating — <strong>all to protect every journey towards health and beauty.</strong>', zh: '26 年坚持初心，持续创新，<strong>以专业与远见，守护每一段通往健康与美丽的旅程。</strong>' },
  'scroll-hint': { en: 'Scroll for Our Journey', zh: '向下滑动查看我们的旅程' },
  'timeline-label': { en: 'Our Journey — Tap a Year', zh: '我们的旅程 — 点选年份查看' },

  'tc-link': { en: 'View Story →', zh: '查看故事 →' },

  'tc-2000-h3': { en: 'The Beginning of a Dream', zh: '梦想的开始' },
  'tc-2000-p': { en: 'SNE Beauty House Was Established', zh: 'SNE Beauty House 成立' },
  'tc-2007-h3': { en: 'Brand Transformation', zh: '品牌蜕变' },
  'tc-2007-p': { en: 'From Representing Brands to Creating Our Own', zh: '从代理品牌，到创造品牌' },
  'tc-2008-h3': { en: 'Laying the Groundwork', zh: '奠定基础' },
  'tc-2008-p': { en: 'Health Seminars & a New Zealand Site Visit', zh: '健康讲座与纽西兰实地考察' },
  'tc-2009-h3': { en: 'Steady Expansion & Continued Growth', zh: '稳健拓展，持续成长' },
  'tc-2009-p': { en: 'The Ipoh & Bukit Mertajam Branches Were Established', zh: 'Ipoh 及 Bukit Mertajam 分店成立' },
  'tc-2011-h3': { en: 'Building on the World Stage', zh: '站上国际舞台' },
  'tc-2011-p': { en: 'Seminars, a Silver-Screen Moment & a Contract Renewal', zh: '讲座、大银幕时刻与代言续约' },
  'tc-2012-h3': { en: 'Crossing Borders', zh: '跨越边境' },
  'tc-2012-p': { en: 'New Image Stores in Brunei & Hong Kong', zh: '汶莱与香港形象店开幕' },
  'tc-2013-h3': { en: 'A New Stage of Growth', zh: '跨越成长' },
  'tc-2013-p': { en: 'A Complete Upgrade at Gurney Plaza', zh: 'Gurney Plaza 全面升级' },
  'tc-2014-h3': { en: 'Brand Upgrade', zh: '品牌升级' },
  'tc-2014-p': { en: 'A New Location in Butterworth', zh: 'Butterworth 全新据点' },
  'tc-2015-h3': { en: 'A New Wellness Home', zh: '全新健康基地' },
  'tc-2015-p': { en: 'The ZÉLL-V Wellness Hub Soft Opens', zh: 'ZÉLL-V 健康城隆重軟開幕' },
  'tc-2016-h3': { en: 'Going Regional', zh: '邁向區域' },
  'tc-2016-p': { en: "The Wellness Hub's Grand Opening", zh: '健康城正式盛大開幕' },
  'tc-2017-h3': { en: 'New Products, New Recognition', zh: '新品與新榮譽' },
  'tc-2017-p': { en: 'ZÉLL-V Green & an SMEs Award', zh: 'ZÉLL-V Green 與中小企業獎' },
  'tc-2018-h3': { en: 'Best in Asia Pacific', zh: '亞太之最' },
  'tc-2018-p': { en: 'A Symposium for Doctors & a Regional Award', zh: '醫師專場研討會與區域殊榮' },
  'tc-2019-h3': { en: 'Global Recognition', zh: '全球肯定' },
  'tc-2019-p': { en: 'The Global Health Award & a Cellular Therapy Symposium', zh: 'Global Health 獎與細胞療法研討會' },
  'tc-2020-h3': { en: 'Same Root, Same Dream', zh: '同根同夢' },
  'tc-2020-p': { en: 'A New Melaka Outlet & a Global Gala', zh: '馬六甲新店與全球盛典' },
  'tc-2021-h3': { en: 'Adapting & Innovating', zh: '順應變化，持續創新' },
  'tc-2021-p': { en: 'ZÉLL-V NMN Launches & V-Star Goes Virtual', zh: 'ZÉLL-V NMN 上市與 V-Star 線上化' },
  'tc-2022-h3': { en: 'Recognition & Regional Ties', zh: '榮譽與區域聯繫' },
  'tc-2022-p': { en: "The Women Glamour Award & V Wellness's Expansion", zh: '女人行表揚會與 V Wellness 拓展' },
  'tc-2023-h3': { en: 'A Landmark Year', zh: '重要里程碑' },
  'tc-2023-p': { en: "The BrandLaureate Award & Johor Bahru's New Wellness Hub", zh: '卓越品牌大獎與新山健康城' },
  'tc-2024-h3': { en: 'Expanding Horizons', zh: '拓展新版圖' },
  'tc-2024-p': { en: 'A Cambodia Launch & a New Product Line', zh: '進軍柬埔寨與全新產品線' },
  'tc-2026-h3': { en: 'A New Era of Wellness', zh: '开启 Wellness 新时代' },
  'tc-2026-p': { en: 'Penang Wellness Was Officially Established', zh: '槟城 Wellness 正式诞生' },

  'nav-timeline': { en: 'Timeline', zh: '时间轴' },
  'nav-return-vision': { en: 'Return to Vision', zh: '返回愿景页' },
  'nav-next': { en: 'Next', zh: '下一步' },
  'tbc-title': { en: 'To be Continued...', zh: '敬请期待...' },

  'y2000-eyebrow': { en: 'Our Journey / 2000', zh: '我们的旅程 / 2000' },
  'y2000-p1': { en: 'It all began with a passion for beauty.', zh: '一切，始于一份对美丽的热爱。' },
  'y2000-p2': { en: 'The founder established SNE Beauty House in Bukit Jambul, Penang, beginning her entrepreneurial journey by providing professional beauty services, including slimming, bust enhancement, body-shaping lingerie and eyelash services.', zh: '创办人在槟城 Bukit Jambul 创立 SNE Beauty House，以专业美容服务开启创业旅程，提供瘦身、丰胸、调型内衣、美睫等服务，并代理多项国际美容品牌，包括 MFII、Natural Push Up 及 Lanni 荷荷巴油。' },
  'y2000-p3': { en: 'The company also represented several international beauty brands, including MFII, Natural Push Up and Lanni Jojoba Oil.', zh: '' },
  'y2000-p4': { en: "In the early days, the team consisted of only two members. Yet, with an unwavering commitment to professionalism, integrity and attentive service, they earned the trust of their customers one step at a time, laying a strong foundation for the brand's future development.", zh: '创业初期，团队只有两位伙伴，却始终坚持专业、诚信与用心服务，凭着一步一脚印的努力，赢得顾客的信任，也奠定了品牌发展的根基。' },

  'y2007-eyebrow': { en: 'Our Journey / 2007', zh: '我们的旅程 / 2007' },
  'y2007-p1': { en: 'The brand was officially upgraded to Ruyi and relocated to Gurney Plaza, marking the beginning of a new chapter.', zh: '品牌正式升级为 Ruyi，并迁入 Gurney Plaza，开启全新篇章。' },
  'y2007-quote-lead': { en: 'The founder has always believed:', zh: '创办人始终相信：' },
  'y2007-quote': { en: '"Do not simply represent other people\'s brands. Create a brand of your own."', zh: '「不要只是代理别人的品牌，而要创造属于自己的品牌。」' },
  'y2007-p3': { en: 'Guided by this belief, she travelled extensively around the world to learn about advanced international technologies and health management concepts, and subsequently established several proprietary brands:', zh: '怀抱这份信念，她不断走访世界各地，学习国际先进技术与健康管理理念，并陆续创立自有品牌：' },
  'y2007-brands': { en: '• Zéll-V&nbsp;&nbsp;&nbsp;• NPU&nbsp;&nbsp;&nbsp;• BeJojoba', zh: '• ZÉLL-V&nbsp;&nbsp;&nbsp;• NPU&nbsp;&nbsp;&nbsp;• BeJojoba' },
  'y2007-p4': { en: 'At the same time, advanced sub-health screening technology was introduced, leading the brand beyond traditional beauty services and into science-based health management, opening a new direction for its development.', zh: '同时，引进先进亚健康检测科技，带领品牌从传统美容迈向科学健康管理，开启全新的发展方向。' },

  'y2008-eyebrow': { en: 'Our Journey / 2008', zh: '我们的旅程 / 2008' },
  'y2008-h2': { en: 'Laying the Groundwork', zh: '奠定基础' },
  'y2008-sub': { en: 'Health Seminars & the New Zealand Site Visit', zh: '健康讲座与纽西兰实地考察' },
  'y2008-p1': { en: "Through 2008, the brand entered its formative phase — hosting health seminars to build public trust in its approach, while the founder travelled to New Zealand to study advanced cellular and wellness technologies at their source, laying the technical groundwork for what would soon become ZÉLL-V.", zh: '2008年，品牌迈入建立阶段——积极参与健康讲座活动，建立公众对品牌理念的信任；创办人同时远赴纽西兰实地考察，深入研究细胞与健康科技的源头技术，为日后 ZÉLL-V 的诞生奠定坚实的技术基础。' },

  'y2009-eyebrow': { en: 'Our Journey / 2009 – 2010', zh: '我们的旅程 / 2009 – 2010' },
  'y2009-title': { en: 'Steady Expansion', zh: '稳健拓展' },
  'y2009-sub': { en: 'The Ipoh Branch Was Established', zh: 'Ipoh 分店成立' },
  'y2009-p': { en: 'The brand took its first step towards regional expansion, bringing its professional beauty services and health management philosophy to more cities, allowing more people to experience professional and comprehensive care.', zh: '品牌迈出跨区域发展的第一步，把专业美容与健康管理理念带到更多城市，让更多人享受更专业、更全面的服务。' },
  'y2009-p2': { en: 'That same year, the brand hosted a medical seminar at The Westin Kuala Lumpur and introduced cell-check services for the first time, while Elaine Kang signed on as brand ambassador — part of a packed year that also saw participation in numerous medical trade shows.', zh: '同年，品牌于吉隆坡威斯汀酒店举办医学讲座，并首次引进细胞检测服务；江夢蕾亦于同年签约成为品牌代言人——如意在这一年积极参与多场医学展销会，步伐紧凑而充实。' },
  'y2010-title': { en: 'Continued Growth', zh: '持续成长' },
  'y2010-sub': { en: 'The Bukit Mertajam Branch Was Established', zh: 'Bukit Mertajam 分店成立' },
  'y2010-p': { en: 'As the brand continued to grow, its service network expanded and the team grew stronger, allowing more customers to experience professional, reliable and thoughtful health and beauty services.', zh: '随着品牌不断成长，服务网络持续扩大，团队规模日益壮大，让更多顾客体验专业、安心且有温度的健康与美丽服务。' },
  'y2010-p2': { en: '2010 also saw Malaysian superstar Rosyam Nor sign on as brand ambassador, the launch of the first V-Star Star Search, and the opening of the ZÉLL-V International Headquarters at Marina Bay Sands, Singapore — alongside a medical seminar at the Penang Shangri-La Hotel.', zh: '2010年，马来西亚巨星 Rosyam Nor 签约成为品牌代言人，首届 V-Star 选星赛隆重举行，ZÉLL-V 国际总站更于新加坡金沙正式开幕，同时在槟城香格里拉酒店举办医学讲座，标志着品牌发展的重要一年。' },

  'y2011-eyebrow': { en: 'Our Journey / 2011', zh: '我们的旅程 / 2011' },
  'y2011-p1': { en: '2011 saw the brand deepen its regional presence — hosting a delegation of German medical specialists and staging a customer experience event in Kuala Lumpur, while its products even featured on the silver screen in the Singapore film "We Not Naughty," shot at Marina Bay Sands.', zh: '2011年，品牌持续深化区域布局——接待德国医学专家团队来访，于吉隆坡举办顾客产品体验会；品牌产品更登上新加坡电影《小孩不壞》大银幕，取景于滨海湾金沙。' },
  'y2011-p2': { en: 'Elaine Kang renewed her contract as brand ambassador, and the year closed with the 2nd V-Star Star Search and a string of public health and medical seminars across Singapore, Hong Kong and Malaysia.', zh: '江夢蕾同年续约成为品牌代言人，年末迎来第二届 V-Star 选星赛，以及在新加坡、香港与马来西亚各地举办的一系列公众健康与医学讲座。' },

  'y2012-eyebrow': { en: 'Our Journey / 2012', zh: '我们的旅程 / 2012' },
  'y2012-p1': { en: "The brand's international footprint grew further in 2012 with the opening of new ZÉLL-V image stores in Brunei and Hong Kong, alongside large-scale mall promotions across Malaysia and the 3rd V-Star Star Search.", zh: '2012年，品牌国际版图持续扩展——汶萊及香港形象店相继开幕，同时在马来西亚各地展开大型商场展销活动，第三届 V-Star 选星赛亦隆重举行。' },
  'y2012-p2': { en: 'A 15-storey ZÉLL-V building in Seputeh was signed, and from September to December the brand ran its "On-The-Go" nationwide health tour, carrying its wellness message across the country.', zh: 'Seputeh 15层 ZÉLL-V 大厦正式签约；9月至12月，品牌更展开「On-The-Go」全马健康巡回活动，将健康理念带到全国各地。' },

  'y2013-eyebrow': { en: 'Our Journey / 2013', zh: '我们的旅程 / 2013' },
  'y2013-p1': { en: 'As the number of customers continued to increase, the Gurney Plaza branch expanded from approximately 480 square feet to approximately 2,000 square feet.', zh: '随着顾客不断增加，Gurney Plaza 分店由约 480 平方尺扩展至约 2,000 平方尺。' },
  'y2013-p2': { en: "This represented more than an expansion of space. It symbolised the growing strength of the brand and the market's strong recognition of Ruyi, while also reflecting the founder's spirit of continuous innovation and her determination to keep moving beyond boundaries.", zh: '这不仅代表空间的升级，更象征品牌实力的提升，以及市场对 Ruyi 的高度认可，也见证创办人持续创新、不断突破的发展精神。' },
  'y2013-p3': { en: 'The year also brought the honour of hosting the First Lady of Mozambique, the 4th V-Star Star Search, a Resource Integration Seminar, and the launch of ZÉLL-V Rosemato — alongside the opening of the ZÉLL-V Gurney Plaza image store and a new image store in Vietnam.', zh: '同年，品牌更荣幸接待南非莫三比克第一夫人来访，举办第四届 V-Star 选星赛及资源整合讲座会，并推出全新产品 ZÉLL-V Rosemato；ZÉLL-V Gurney Plaza 形象店及越南形象店亦相继开幕。' },

  'y2014-eyebrow': { en: 'Our Journey / 2014', zh: '我们的旅程 / 2014' },
  'y2014-p1': { en: "The Bukit Mertajam branch officially relocated to a prime location in Butterworth, with comprehensive upgrades to its service environment, professional equipment and brand image, establishing a stronger foundation for the brand's future development.", zh: '武吉丁宜分店正式迁至 Butterworth 黄金地段，全面升级服务环境、专业设备及品牌形象，为品牌未来发展奠定更坚实的基础。' },
  'y2014-p2': { en: "2014 also saw Sharon Chan sign on as international spokesperson, the 5th V-Star Star Search, and the launch of ZÉLL-V Phytogreen in Singapore, as extensive renovations began on the brand's Kuala Lumpur headquarters.", zh: '2014年，品牌签约陈敏之为国际代言人，举办第五届 V-Star 选星赛，并于新加坡推出 ZÉLL-V Phytogreen 新品；吉隆坡总部大楼同时展开大规模装修工程。' },
  'y2014-p3': { en: 'The brand was honoured with the Sin Chew Business Excellence Award and the Malaysian Franchise Association\'s Most Influential Franchise Award, was featured on China\'s Xinhua Net, and closed the year with its "My ZÉLL-V, My Life" annual dinner.', zh: '品牌荣获星洲企业楷模奖及马来西亚连锁经营协会颁发的最具影响力连锁故事奖，并获中国新华网报导，年终更以「My ZÉLL-V, My Life」年度晚宴圆满结束这一年。' },

  'y2015-eyebrow': { en: 'Our Journey / 2015', zh: '我们的旅程 / 2015' },
  'y2015-p1': { en: "2015 marked the soft opening of the ZÉLL-V Wellness Hub, alongside the brand's 6th anniversary celebration in Singapore.", zh: '2015年，ZÉLL-V 健康城隆重軟開幕，品牌同時慶祝新加坡6週年紀念。' },
  'y2015-p2': { en: "Sora Ma signed on as brand ambassador, appearing alongside Rosyam Nor at a joint press conference, as the brand's international presence grew further with an appearance at the Shanghai Expo.", zh: '馬藝瑄簽約成為品牌代言人，與 Rosyam Nor 一同出席聯合新聞發布會；品牌國際版圖亦持續擴展，参与上海博覽會。' },

  'y2016-eyebrow': { en: 'Our Journey / 2016', zh: '我们的旅程 / 2016' },
  'y2016-p1': { en: "The ZÉLL-V Wellness Hub held its official grand opening in 2016, a year that also saw the brand's regional presence surge — from the 6th V-Star Star Search to an appearance on NTV7's Living Delight Show.", zh: '2016年，ZÉLL-V 健康城正式盛大開幕；同年品牌區域聲勢更是水漲船高——從第六屆 V-Star 選星賽，到登上 NTV7《活力加油站》節目。' },
  'y2016-p2': { en: 'The brand carried its message across borders with medical seminars and exhibition booths in Chengdu, Jakarta, Myanmar and the Arab Health Exhibition, culminating in the opening of ZÉLL-V Chengdu.', zh: '品牌更將理念帶到海外——於成都、雅加達、緬甸及阿拉伯健康展舉辦醫學講座與參展，並於成都正式開幕。' },

  'y2017-eyebrow': { en: 'Our Journey / 2017', zh: '我们的旅程 / 2017' },
  'y2017-p1': { en: '2017 brought the launch of ZÉLL-V Green and the ZÉLL-V 30000mg product in Vietnam, along with an SMEs Award for the ZÉLL-V product brand.', zh: '2017年，ZÉLL-V Green 及 ZÉLL-V 30000mg（越南）新品相繼發佈，品牌更榮獲中小企業獎。' },
  'y2017-p2': { en: 'The year was rounded out with medical symposiums in Malaysia and Germany, and participation in the INTAAC International Anti-Ageing Conference in Jakarta.', zh: '同年並於馬來西亞及德國舉辦醫學研討會，並參與雅加達 INTAAC 國際抗老會議。' },

  'y2018-eyebrow': { en: 'Our Journey / 2018', zh: '我们的旅程 / 2018' },
  'y2018-p1': { en: '2018 saw ZÉLL-V host a symposium for doctors in Singapore, an MRCA CEO Night, an international seminar, and the 7th V-Star Star Search.', zh: '2018年，ZÉLL-V 於新加坡舉辦醫師專場研討會、出席 MRCA 總裁之夜、舉行國際研討會，並迎來第七屆 V-Star 選星賽。' },
  'y2018-p2': { en: 'The year was capped off by the brand being named Best Wellness and Holistic Provider of the Year in Asia Pacific by Global Health & Travel.', zh: '同年更榮獲 Global Health & Travel 頒發「亞太地區最佳健康與全方位健康服務提供者」殊榮。' },

  'y2019-eyebrow': { en: 'Our Journey / 2019', zh: '我们的旅程 / 2019' },
  'y2019-p1': { en: 'Global recognition continued in 2019 with the Global Health Award, alongside a cellular therapy symposium and a "Reprogramming Your Cells" talk in Kuala Lumpur.', zh: '2019年，品牌再度榮獲 Global Health 獎，同時舉辦細胞療法研討會及「細胞再編程」講座（吉隆坡）。' },
  'y2019-p2': { en: 'The ZÉLL-V Wellness Hub welcomed notable visitors that year, including Mrs Singapore pageant finalists and artiste Yasmin Hani.', zh: 'ZÉLL-V 健康城同年亦迎來多位貴賓到訪，包括新加坡夫人選美決賽選手及藝人 Yasmin Hani。' },

  'y2020-eyebrow': { en: 'Our Journey / 2020', zh: '我们的旅程 / 2020' },
  'y2020-p1': { en: '2020 opened with the launch of the brand\'s "Same Root, Same Dream" Global Chinese New Year Gala and the opening of a new ZÉLL-V outlet in Melaka.', zh: '2020年，品牌推出「同根同夢」全球華人春節聯歡晚會，馬六甲新店隆重開業。' },
  'y2020-p2': { en: "Mrs Singapore contestants also paid a visit to the ZÉLL-V Ngee Ann outlet, continuing the brand's close ties with the region's beauty and wellness community.", zh: '新加坡夫人選美參賽者亦到訪 ZÉLL-V Ngee Ann 分店，延續品牌與區域美麗與健康社群的緊密聯繫。' },

  'y2021-eyebrow': { en: 'Our Journey / 2021', zh: '我们的旅程 / 2021' },
  'y2021-p1': { en: "2021 saw the launch of the ZÉLL-V NMN product, alongside a virtual medical symposium and the brand's V-Star Star Search moving online — adapting to a changed world while continuing to innovate.", zh: '2021年，ZÉLL-V NMN 新品正式發布，品牌同時舉辦線上醫學研討會，V-Star 選星賽亦轉為線上活動舉行——在時代變遷中持續創新。' },

  'y2022-eyebrow': { en: 'Our Journey / 2022', zh: '我们的旅程 / 2022' },
  'y2022-p1': { en: "The brand was honoured at the Women Glamour Award Ceremony in 2022, marked the opening of V Wellness's business expansion, and renewed its Vietnam distributor contract following an authorised distributor certificate presentation in Cambodia.", zh: '2022年，品牌榮獲女人行表揚會殊榮，V Wellness 業務拓展亦隆重開業；品牌更向柬埔寨代理頒發授權經銷商證書，並完成越南代理續約儀式。' },
  'y2022-p2': { en: "The year also brought the 8th V-Star Star Search, further activities in Vietnam, an interview with Dato' Sharon by Britishpedia, and the Majlis Datuk & Dato' Malaysia dinner at One World Hotel.", zh: '同年亦舉行第八屆 V-Star 選星賽及多場越南活動，拿督 Sharon 更接受 Britishpedia 專訪，品牌並出席於世界飯店舉辦的馬來西亞拿督晚宴。' },

  'y2023-eyebrow': { en: 'Our Journey / 2023', zh: '我们的旅程 / 2023' },
  'y2023-p1': { en: "2023 was a landmark year — the brand was honoured with the BrandLaureate Award, celebrated ZÉLL-V Vietnam's 10th anniversary, and opened both a ZÉLL-V Wellness Hub and a V Wellness outlet in Johor Bahru.", zh: '2023年是品牌發展的重要一年——榮獲卓越品牌大獎，慶祝 ZÉLL-V 越南10週年慶，並於新山同時開設 ZÉLL-V 健康城與 V Wellness 分店。' },
  'y2023-p2': { en: 'The brand hosted the ZÉLL-V International Cellular Therapy Symposium, welcomed a corporate visit from the 2023 ASEAN Entrepreneurs Elite Summit and Mrs Singapore pageant finalists, and conducted site inspections in both New Zealand and the United States.', zh: '品牌舉辦 ZÉLL-V 國際細胞治療研討會，接待2023東協企業家精英高峰會企業參訪團及新加坡夫人決賽選手到訪，並分別赴紐西蘭及美國進行實地考察。' },

  'y2024-eyebrow': { en: 'Our Journey / 2024', zh: '我们的旅程 / 2024' },
  'y2024-p1': { en: "2024 opened with the brand's launch in Cambodia and the debut of the ZÉLL-V Platinum Plus 3 product, followed by the HK Star Charity Concert at ICC Pudu.", zh: '2024年，品牌正式進軍柬埔寨市場，並推出 ZÉLL-V Platinum Plus 3 新品，隨後於 ICC Pudu 舉辦香港明星慈善音樂會。' },
  'y2024-p2': { en: 'The ZÉLL-V Wellness Hub and Ngee Ann outlet welcomed a series of notable visitors that year, including PUMM and Mrs Singapore pageant finalists and contestants.', zh: 'ZÉLL-V 健康城及 Ngee Ann 分店同年迎來多位貴賓到訪，包括 PUMM 及新加坡夫人選美決賽選手與參賽者。' },

  'y2026-eyebrow': { en: 'Our Journey / 2026', zh: '我们的旅程 / 2026' },
  'y2026-p1': { en: "The Butterworth and Gurney branches were officially integrated to establish Penang Wellness, marking a new milestone in the brand's journey.", zh: 'Butterworth 与 Gurney 两家分店正式整合，成立 Penang Wellness，开启品牌发展的全新里程碑。' },
  'y2026-p2': { en: "This represents the culmination of the founder's twenty-six years of continuous learning, ongoing innovation and courage to break new ground.", zh: '这是创办人二十六年来不断学习、持续创新、勇于突破的重要成果。' },
  'y2026-p3': { en: "From a small beauty salon in Bukit Jambul to today's one-stop health centre integrating Wellness, precision health management and regenerative medicine, every step of the journey has been shaped by perseverance, conviction and vision.", zh: '从一间位于 Bukit Jambul 的小美容院，到今天融合 Wellness、精准健康管理及再生医学的一站式健康中心，每一步都承载着坚持、信念与远见。' },
  'y2026-p4': { en: 'Today, we not only help our customers pursue beauty, but also hope to accompany every individual towards a healthier, more youthful and vibrant life.', zh: '今天，我们不仅帮助顾客追求美丽，更希望陪伴每一位顾客迈向健康、年轻、充满活力的人生。' },

  'nav-back-map': { en: 'Back to Map', zh: '返回地图' },

  'st-ipoh-eyebrow': { en: 'Our Journey / Ipoh', zh: '我们的旅程 / 怡保' },
  'st-ipoh-h2': { en: 'Steady Expansion', zh: '稳健拓展' },
  'st-ipoh-sub': { en: 'The Ipoh Outlet Opens — 2009', zh: '怡保分店开业 — 2009年' },
  'st-ipoh-p1': { en: "In 2009, as Ruyi took its first step beyond Penang, the Ipoh outlet opened its doors — bringing the brand's professional beauty and health management services to the people of Perak for the very first time.", zh: '2009年，随着如意迈出走出槟城的第一步，怡保分店正式开业——首次将品牌专业的美容与健康管理服务带到霹雳州。' },

  'st-kuantan-eyebrow': { en: 'Our Journey / Kuantan', zh: '我们的旅程 / 关丹' },
  'st-kuantan-h2': { en: 'Reaching Further East', zh: '向东拓展' },
  'st-kuantan-sub': { en: 'The Kuantan Outlet Opens — 2009', zh: '关丹分店开业 — 2009年' },
  'st-kuantan-p1': { en: 'The same year, Ruyi carried that expansion further east, opening its Kuantan outlet and extending its reach into Pahang — part of a wider push that saw the brand exhibit at more than 20 trade shows between August and December 2009 alone.', zh: '同年，如意持续向东拓展版图，关丹分店隆重开业，服务范围延伸至彭亨州——当年8月至12月短短5个月内，品牌更参与超过20场展销会，拓展步伐前所未有。' },

  'st-kl2007-eyebrow': { en: 'Our Journey / Kuala Lumpur', zh: '我们的旅程 / 吉隆坡' },
  'st-kl2007-h2': { en: 'Where It All Began', zh: '品牌起点' },
  'st-kl2007-sub': { en: 'Ruyi Holdings Founded at KL Plaza — 2007', zh: '如意控股于 KL Plaza 成立 — 2007年' },
  'st-kl2007-p1': { en: 'Kuala Lumpur has been part of the brand\'s story from the very beginning — Ruyi Holdings Sdn Bhd was established at KL Plaza in 2007, the same year its first medical seminar, "Young Again," was hosted at The Westin Kuala Lumpur.', zh: '吉隆坡自品牌创立之初便紧密相连——如意控股有限公司于2007年在 KL Plaza 正式成立，同年首场医学讲座「年轻再现」亦于吉隆坡威斯汀酒店举行。' },

  'st-kl2009-eyebrow': { en: 'Our Journey / Kuala Lumpur', zh: '我们的旅程 / 吉隆坡' },
  'st-kl2009-h2': { en: 'Taking to the Road', zh: '巡回路演' },
  'st-kl2009-sub': { en: 'First ZÉLL-V Roadshow at Pavilion KL — 2009', zh: 'Pavilion KL 首场路演活动 — 2009年' },
  'st-kl2009-p1': { en: "A further medical seminar was held at The Westin, alongside the brand's first-ever roadshow at Pavilion KL — bringing ZÉLL-V directly to shoppers in the heart of the city.", zh: '威斯汀酒店再度举办医学讲座，品牌亦于 Pavilion KL 举行首场路演活动——将 ZÉLL-V 直接带到市中心的顾客面前。' },

  'st-kl2010-eyebrow': { en: 'Our Journey / Kuala Lumpur', zh: '我们的旅程 / 吉隆坡' },
  'st-kl2010-h2': { en: 'A Home of Our Own', zh: '属于自己的家' },
  'st-kl2010-sub': { en: 'Wisma Ruyi Inaugurated at Pudu — 2010', zh: 'Wisma Ruyi 于半山芭隆重启用 — 2010年' },
  'st-kl2010-p1': { en: "2010 brought the grand inauguration of Wisma Ruyi at Pudu — the company's own headquarters building, and a permanent home for the brand in the city where it all began.", zh: '2010年，如意大厦 Wisma Ruyi 于半山芭隆重启用——成为公司总部所在地，也是品牌在起点城市的永久基地。' },

  'st-kl2011-eyebrow': { en: 'Our Journey / Kuala Lumpur', zh: '我们的旅程 / 吉隆坡' },
  'st-kl2011-h2': { en: 'Closer to Customers', zh: '贴近顾客' },
  'st-kl2011-sub': { en: 'A Customer Experience Event — 2011', zh: '顾客产品体验会 — 2011年' },
  'st-kl2011-p1': { en: 'Kuala Lumpur hosted a customer experience event in 2011, bringing the brand closer to its growing community of loyal customers in the capital.', zh: '吉隆坡于2011年举办顾客产品体验会，让品牌与首都日益壮大的忠实顾客群体更加贴近。' },

  'st-kl2012-eyebrow': { en: 'Our Journey / Kuala Lumpur', zh: '我们的旅程 / 吉隆坡' },
  'st-kl2012-h2': { en: 'A New Storefront', zh: '全新店面' },
  'st-kl2012-sub': { en: 'Be+ Pavilion KL Opens — 2012', zh: 'Be+ Pavilion KL 開幕 — 2012年' },
  'st-kl2012-p1': { en: "The opening of the Be+ Pavilion KL store extended the brand's presence within one of the city's most prominent shopping destinations.", zh: 'Be+ Pavilion KL 形象店開幕，让品牌进驻城中最具代表性的购物地标之一。' },

  'st-kl2014-eyebrow': { en: 'Our Journey / Kuala Lumpur', zh: '我们的旅程 / 吉隆坡' },
  'st-kl2014-h2': { en: 'Investing in Home', zh: '深耕总部' },
  'st-kl2014-sub': { en: 'Headquarters Renovations Begin — 2014', zh: '总部大楼展开装修 — 2014年' },
  'st-kl2014-p1': { en: 'Extensive renovations began on the ZÉLL-V headquarters in 2014 — a continued investment in the city that started it all.', zh: '2014年，ZÉLL-V 总部大楼展开大规模装修工程——持续投资这座见证品牌起点的城市。' },

  'st-kl2019-eyebrow': { en: 'Our Journey / Kuala Lumpur', zh: '我们的旅程 / 吉隆坡' },
  'st-kl2019-h2': { en: 'Reprogramming Cells, Reimagining Wellness', zh: '细胞再编程，重新定义健康' },
  'st-kl2019-sub': { en: 'The "Reprogramming Your Cells" Talk — 2019', zh: '「细胞再编程」讲座 — 2019年' },
  'st-kl2019-p1': { en: 'In 2019, Kuala Lumpur hosted the brand\'s "Reprogramming Your Cells" talk — sharing the science behind ZÉLL-V\'s cellular therapy approach with the capital\'s health-conscious community, part of a year of global recognition for the brand.', zh: '2019年，吉隆坡举办品牌「细胞再编程」讲座，向首都注重健康的社群分享 ZÉLL-V 细胞疗法背后的科学理念，也是品牌荣获全球肯定的一年。' },

  'st-johor2010-eyebrow': { en: 'Our Journey / Johor', zh: '我们的旅程 / 柔佛' },
  'st-johor2010-h2': { en: 'A New Frontier South', zh: '南部新据点' },
  'st-johor2010-sub': { en: 'The Johor Outlet Opens — 2010', zh: '柔佛分店开业 — 2010年' },
  'st-johor2010-p1': { en: "2010 marked a landmark year for the brand — the international headquarters opened at Marina Bay Sands, Singapore, and on home ground, a new ZÉLL-V store opened at KLS City, Johor, bringing the brand's services to the southern peninsula for the first time.", zh: '2010年是品牌发展的重要里程碑——国际总站于新加坡金沙盛大开幕，同时马来西亚南部迎来首间 ZÉLL-V 分店，坐落于柔佛 KLS City，正式将品牌服务带入马来西亚半岛南端。' },

  'st-johor2023-eyebrow': { en: 'Our Journey / Johor', zh: '我们的旅程 / 柔佛' },
  'st-johor2023-h2': { en: 'A Wellness Destination', zh: '健康新据点' },
  'st-johor2023-sub': { en: 'ZÉLL-V Wellness Hub & V Wellness Open in Johor Bahru — 2023', zh: 'ZÉLL-V 健康城与 V Wellness 于新山开幕 — 2023年' },
  'st-johor2023-p1': { en: 'In 2023, Johor Bahru welcomed both a new ZÉLL-V Wellness Hub and a V Wellness outlet — expanding the brand\'s presence in the state beyond its original KLS City store and establishing Johor Bahru as a growing wellness destination.', zh: '2023年，新山迎来全新的 ZÉLL-V 健康城与 V Wellness 分店——品牌在柔佛的版图自 KLS City 首店以来持续扩展，新山逐渐成为区域健康新据点。' },

  'st-melaka2010-eyebrow': { en: 'Our Journey / Melaka', zh: '我们的旅程 / 马六甲' },
  'st-melaka2010-h2': { en: 'Growing the Network', zh: '版图扩展' },
  'st-melaka2010-sub': { en: 'The Melaka Outlet Opens — 2010', zh: '马六甲分店开业 — 2010年' },
  'st-melaka2010-p1': { en: "That same year, ZÉLL-V opened its doors at Aeon Bandaraya, Melaka — one of five new stores launched across Malaysia in 2010 as the brand's presence continued to grow nationwide.", zh: '同年，ZÉLL-V 于马六甲 Aeon Bandaraya 正式开业——是2010年全国五间新分店之一，品牌版图持续在马来西亚扩展。' },

  'st-melaka2020-eyebrow': { en: 'Our Journey / Melaka', zh: '我们的旅程 / 马六甲' },
  'st-melaka2020-h2': { en: 'A Second Chapter', zh: '全新篇章' },
  'st-melaka2020-sub': { en: 'A New ZÉLL-V Outlet Opens — 2020', zh: 'ZÉLL-V 新店开业 — 2020年' },
  'st-melaka2020-p1': { en: 'A decade after its first Melaka store, ZÉLL-V opened a new outlet in the state in 2020 — part of a year that also saw the brand\'s "Same Root, Same Dream" Global Chinese New Year Gala.', zh: '继首间马六甲分店成立十年后，ZÉLL-V 于2020年在当地开设新店——同年品牌亦推出「同根同夢」全球華人春節聯歡晚會。' },

  'st-kelantan-eyebrow': { en: 'Our Journey / Kelantan', zh: '我们的旅程 / 吉兰丹' },
  'st-kelantan-h2': { en: 'Extending North', zh: '向北延伸' },
  'st-kelantan-sub': { en: 'The Kelantan Outlet Opens — 2010', zh: '吉兰丹分店开业 — 2010年' },
  'st-kelantan-p1': { en: 'Further north, a new ZÉLL-V store opened at Kb Mall, Kelantan, part of the brand\'s 2010 wave of expansion that also reached Johor, Melaka, Penang and Selangor within the same year.', zh: '品牌版图持续向北延伸，ZÉLL-V 于吉兰丹 Kb Mall 开设新分店，是2010年扩展浪潮的一部分，同年版图更遍及柔佛、马六甲、槟城及雪兰莪。' }
};

let currentLang = localStorage.getItem('zellv_lang') === 'zh' ? 'zh' : 'en';

function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    const entry = translations[el.getAttribute('data-i18n')];
    if(entry) el.innerHTML = entry[currentLang];
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  const langBtn = document.getElementById('langToggle');
  if(langBtn) langBtn.textContent = currentLang === 'en' ? '中文' : 'ENGLISH';
  updateCrumbLabel();
  if(currentId() === 'tbc') tbcRenderStatic();
  if(/^(year|state)-/.test(currentId())){
    applyWordFadeForYearPage(document.getElementById('page-' + currentId()));
  }
}

// ---- word-by-word fade-in for year-page story text: rebuilds each
// data-i18n element's content (straight from the translations dict, so it's
// always correct for the current language) into one <span class="word">
// per word, with a staggered animation-delay. Since the spans are brand-new
// DOM nodes every time, the CSS animation just replays on each page entry —
// no manual animation resets needed.
function wrapWordsInNode(node){
  Array.from(node.childNodes).forEach(function(child){
    if(child.nodeType === Node.TEXT_NODE){
      const text = child.textContent;
      if(!text || !text.trim()) return;
      const frag = document.createDocumentFragment();
      text.split(/(\s+)/).forEach(function(part){
        if(part === '') return;
        if(/^\s+$/.test(part)){
          frag.appendChild(document.createTextNode(part));
        } else {
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = part;
          frag.appendChild(span);
        }
      });
      node.replaceChild(frag, child);
    } else if(child.nodeType === Node.ELEMENT_NODE){
      wrapWordsInNode(child);
    }
  });
}

function wordifyElement(el, baseDelayMs){
  const key = el.getAttribute('data-i18n');
  const entry = key ? translations[key] : null;
  const source = entry ? entry[currentLang] : el.innerHTML;
  if(!source) return;

  const temp = document.createElement('div');
  temp.innerHTML = source;
  wrapWordsInNode(temp);
  el.innerHTML = temp.innerHTML;

  el.querySelectorAll('.word').forEach(function(w, i){
    w.style.animationDelay = (baseDelayMs + Math.min(i * 16, 380)) + 'ms';
  });
}

function applyWordFadeForYearPage(target){
  if(!target) return;
  const nodes = Array.from(target.querySelectorAll('[data-i18n]')).filter(function(el){
    return !el.closest('.yr-nav');
  });
  nodes.forEach(function(el, idx){
    wordifyElement(el, idx * 90);
  });
}

function updateCrumbLabel(){
  const crumbPath = document.getElementById('crumbPath');
  if(!crumbPath) return;
  const id = currentId();
  const entry = labels[id];
  crumbPath.textContent = entry ? ' / ' + entry[currentLang] : '';
}

function toggleLanguage(){
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('zellv_lang', currentLang);
  applyTranslations();
}

const history = [];

function currentId(){
  return document.querySelector('.page.active').id.replace('page-', '');
}

function updateTimelineFill(id){
  const topBar = document.getElementById('topProgress');
  const topFill = document.getElementById('topProgressFill');
  document.querySelectorAll('.timeline-item').forEach(function(n){ n.classList.remove('current'); });

  const match = id.match(/^year-(\d{4})$/);
  const idx = match ? years.indexOf(match[1]) : -1;
  if(idx === -1){
    if(topBar) topBar.classList.remove('visible');
    if(topFill) topFill.style.width = '0%';
    return;
  }

  const pct = years.length === 1 ? 100 : (idx / (years.length - 1)) * 100;
  if(topFill) topFill.style.width = pct + '%';
  if(topBar) topBar.classList.add('visible');

  const item = document.querySelector('.timeline-item[data-year="' + match[1] + '"]');
  if(item) item.classList.add('current');
}

// Reveals each timeline card (fade + rise) as it scrolls into view, mirroring
// the scroll-triggered reveal from the original component but without a
// framework — plain IntersectionObserver over the static timeline items.
const timelineObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.25 });

document.querySelectorAll('.timeline-item').forEach(function(item){
  timelineObserver.observe(item);
});

function setActive(id){
  document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
  const target = document.getElementById('page-' + id);
  target.classList.add('active');

  const chrome = document.getElementById('chrome');
  if(id === 'splash'){
    chrome.classList.add('hidden');
  } else {
    chrome.classList.remove('hidden');
    updateCrumbLabel();
  }

  updateTimelineFill(id);
  playSweep(target);
  resetIdle();

  if(id === 'vision'){
    const scroller = document.getElementById('visionScroll');
    if(scroller) scroller.scrollTop = 0;
  }
  if(id === 'map'){
    const mapScroller = document.getElementById('mapScroll');
    if(mapScroller) mapScroller.scrollTop = 0;
  }

  if(/^(year|state)-/.test(id)){
    applyWordFadeForYearPage(target);
  }

  if(id === 'tbc'){
    const btn = document.getElementById('tbcReturnBtn');
    if(btn){
      btn.classList.remove('show', 'vaporizing');
      clearTimeout(tbcTimer);
      tbcTimer = setTimeout(function(){ btn.classList.add('show'); }, 2200);
    }
    cancelAnimationFrame(tbcAnimFrame);
    requestAnimationFrame(function(){ tbcRenderStatic(); });
  }
}

let tbcTimer;

// ---- "To be Continued" particle text: a vanilla Canvas port of a
// vapor/dissolve text effect. Renders the heading as sampled pixel
// particles so it can be blown apart on demand (see vaporizeAndReturn),
// rather than needing a full React/Canvas component framework.
let tbcParticles = [];
let tbcAnimFrame = null;

function tbcRenderStatic(){
  const canvas = document.getElementById('tbcCanvas');
  const wrap = document.getElementById('tbcTextWrap');
  if(!canvas || !wrap) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = wrap.getBoundingClientRect();
  if(!rect.width || !rect.height) return;

  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const entry = translations['tbc-title'];
  const text = (entry ? entry[currentLang] : 'To be Continued...').replace(/<[^>]+>/g, '');
  const fontSize = Math.min(64, Math.max(34, rect.width * 0.085)) * dpr;
  ctx.font = "700 " + fontSize + "px 'Playfair Display', serif";
  ctx.fillStyle = '#8a6c22';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  const particles = [];
  const sampleRate = Math.max(1, Math.round(dpr));

  for(let y = 0; y < canvas.height; y += sampleRate){
    for(let x = 0; x < canvas.width; x += sampleRate){
      const idx = (y * canvas.width + x) * 4;
      const alpha = data[idx + 3];
      if(alpha > 10){
        particles.push({
          x: x, y: y, originalX: x, originalY: y,
          r: data[idx], g: data[idx + 1], b: data[idx + 2],
          opacity: alpha / 255,
          vx: 0, vy: 0
        });
      }
    }
  }

  tbcParticles = particles;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tbcDrawParticles(ctx, sampleRate);
}

function tbcDrawParticles(ctx, size){
  tbcParticles.forEach(function(p){
    if(p.opacity > 0){
      ctx.fillStyle = 'rgba(' + p.r + ',' + p.g + ',' + p.b + ',' + p.opacity + ')';
      ctx.fillRect(p.x, p.y, size, size);
    }
  });
}

// Blows the "To be Continued..." text apart into its sampled particles,
// fades the button out alongside it, then returns home once the dissolve
// has fully cleared (or immediately if the canvas never rendered).
function vaporizeAndReturn(){
  const canvas = document.getElementById('tbcCanvas');
  const btn = document.getElementById('tbcReturnBtn');
  if(btn){ btn.classList.remove('show'); btn.classList.add('vaporizing'); }

  if(!canvas || !tbcParticles.length){
    setTimeout(goVision, 200);
    return;
  }

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const size = Math.max(1, Math.round(dpr));

  tbcParticles.forEach(function(p){
    const angle = Math.random() * Math.PI * 2;
    const speed = (Math.random() * 1.4 + 0.6) * 2.4;
    p.vx = Math.cos(angle) * speed;
    p.vy = Math.sin(angle) * speed;
    p.fadeRate = Math.random() * 0.02 + 0.016;
  });

  const start = performance.now();
  const maxDuration = 1100;

  function frame(now){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let anyVisible = false;
    tbcParticles.forEach(function(p){
      if(p.opacity > 0){
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = Math.max(0, p.opacity - p.fadeRate);
        if(p.opacity > 0){
          anyVisible = true;
          ctx.fillStyle = 'rgba(' + p.r + ',' + p.g + ',' + p.b + ',' + p.opacity + ')';
          ctx.fillRect(p.x, p.y, size, size);
        }
      }
    });

    if(anyVisible && (now - start) < maxDuration){
      tbcAnimFrame = requestAnimationFrame(frame);
    } else {
      cancelAnimationFrame(tbcAnimFrame);
      goVision();
    }
  }
  tbcAnimFrame = requestAnimationFrame(frame);
}

window.addEventListener('resize', function(){
  if(currentId() === 'tbc') tbcRenderStatic();
});

function playSweep(target){
  const old = target.querySelector(':scope > .sweep');
  if(old) old.remove();
  const sweep = document.createElement('div');
  sweep.className = 'sweep';
  target.appendChild(sweep);
  sweep.addEventListener('animationend', function(){ sweep.remove(); });
}

function go(id){
  const current = currentId();
  if(current !== id) history.push(current);
  setActive(id);
}

// Timeline cards get a richer transition than the default page fade: a gold
// circle blooms outward from the tapped card, covers the screen, swaps the
// page underneath while hidden, then fades away to reveal it.
function goFromTimeline(id, evt){
  const x = evt.clientX;
  const y = evt.clientY;
  const size = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  ) * 2.3;

  const veil = document.createElement('div');
  veil.className = 'tl-veil';
  veil.style.left = x + 'px';
  veil.style.top = y + 'px';
  veil.style.width = size + 'px';
  veil.style.height = size + 'px';
  document.getElementById('kiosk').appendChild(veil);

  requestAnimationFrame(function(){
    requestAnimationFrame(function(){ veil.classList.add('expand'); });
  });

  veil.addEventListener('transitionend', function onExpand(e){
    if(e.propertyName !== 'transform') return;
    veil.removeEventListener('transitionend', onExpand);
    go(id);
    veil.classList.add('fade-out');
    veil.addEventListener('transitionend', function onFade(e2){
      if(e2.propertyName !== 'opacity') return;
      veil.remove();
    }, { once:true });
  }, { once:true });
}
function goBack(){
  const prev = history.pop();
  setActive(prev || 'vision');
}
// goHome(): the ⌂ chrome button and the idle-timeout reset — returns all
// the way out to the Malaysia location map (the country-level hub).
function goHome(){
  history.length = 0;
  setActive('map');
}
// goVision(): "Timeline" nav buttons and the tbc page's "Return to Vision"
// — stays within the Penang branch, back to its own vision/timeline hub.
function goVision(){
  history.length = 0;
  setActive('vision');
}

// Tapping a not-yet-available state pin shows a brief toast instead of
// navigating anywhere — the pin's own "Coming Soon" label already signals
// it's inactive, this just gives a tap a visible response.
let comingSoonTimer;
function showComingSoon(stateI18nKey){
  const toast = document.getElementById('comingSoonToast');
  const text = document.getElementById('comingSoonText');
  if(!toast || !text) return;
  const stateEntry = translations[stateI18nKey];
  const soonEntry = translations['map-coming-soon'];
  text.textContent = (stateEntry ? stateEntry[currentLang] : '') + ' — ' + (soonEntry ? soonEntry[currentLang] : 'Coming Soon');
  toast.classList.add('visible');
  clearTimeout(comingSoonTimer);
  comingSoonTimer = setTimeout(function(){ toast.classList.remove('visible'); }, 2200);
}

// Tapping any state pin briefly zooms the map in toward that pin before
// running the actual action (navigate for Penang, toast for everything
// else) — for Penang the page navigates away during the zoom so it never
// needs to reset; for every other pin it zooms back out afterward.
function zoomIntoState(pinEl, then){
  const map = document.querySelector('.my-map');
  if(!map){ then(); return; }
  const mapRect = map.getBoundingClientRect();
  const pinRect = pinEl.getBoundingClientRect();
  const originX = ((pinRect.left + pinRect.width / 2) - mapRect.left) / mapRect.width * 100;
  const originY = ((pinRect.top + pinRect.height / 2) - mapRect.top) / mapRect.height * 100;
  map.style.transformOrigin = originX + '% ' + originY + '%';
  map.classList.add('zooming');
  setTimeout(function(){
    then();
    setTimeout(function(){ map.classList.remove('zooming'); }, 300);
  }, 420);
}

// Idle timeout: after 5 minutes of no interaction, kiosk resets to the splash / attract screen.
let idleTimer;
const IDLE_MS = 300000;
const idleBar = document.getElementById('idleBar');

function resetIdle(){
  clearTimeout(idleTimer);
  idleBar.style.transition = 'none';
  idleBar.style.transform = 'scaleX(0)';
  requestAnimationFrame(function(){
    idleBar.style.transition = 'transform ' + IDLE_MS + 'ms linear';
    idleBar.style.transform = 'scaleX(1)';
  });
  idleTimer = setTimeout(function(){
    history.length = 0;
    if(currentId() !== 'splash' && currentId() !== 'map') setActive('map');
  }, IDLE_MS);
}

// Ripple effect at every tap/click point.
function spawnRipple(x, y){
  const r = document.createElement('div');
  r.className = 'ripple';
  r.style.left = x + 'px';
  r.style.top = y + 'px';
  document.body.appendChild(r);
  r.addEventListener('animationend', function(){ r.remove(); });
}

document.addEventListener('click', function(e){
  spawnRipple(e.clientX, e.clientY);
  resetIdle();
});
document.addEventListener('touchstart', function(e){
  if(e.touches && e.touches[0]){
    spawnRipple(e.touches[0].clientX, e.touches[0].clientY);
  }
  resetIdle();
}, { passive: true });

updateTimelineFill('splash');
applyTranslations();
resetIdle();

// Once an inserted photo loads, shape its frame to the photo's own aspect
// ratio so it fills the frame completely — no cropping (like object-fit:cover
// alone would do) and no empty letterbox margin (like object-fit:contain
// alone would do on a mismatched frame).
// (Disabled: every image frame is now a fixed 4:3 tile — see .photo-slot in
// CSS — instead of matching each photo's own natural aspect ratio.)

// A slot with no photo provided (or one that failed to load) is hidden via
// .img-missing (see CSS) rather than shown as an empty placeholder box — so
// the remaining real photos get sized for how many actually loaded, not for
// however many slots happen to exist in the markup.
function updatePhotoGridCount(grid){
  if(!grid) return;
  const visible = grid.querySelectorAll('.photo-slot:not(.img-missing)').length;
  grid.classList.remove('count-1', 'count-2', 'count-3');
  if(visible >= 1) grid.classList.add('count-' + Math.min(visible, 3));

  // A single surviving photo always gets the big right-side treatment,
  // whether this year normally stacks photos below the text or runs them
  // side-by-side — one photo reads better large than small-and-centered.
  // Skipped for two-col (merged) slides: each half has its own single photo
  // by design, and that's not the "enlarge to fill the page" case.
  const yrContent = grid.closest('.yr-content');
  if(yrContent && !yrContent.classList.contains('two-col')){
    yrContent.classList.toggle('single-photo', visible === 1);
  }
}

document.querySelectorAll('.photo-grid').forEach(function(grid){
  updatePhotoGridCount(grid);
  grid.querySelectorAll('.photo-slot img').forEach(function(img){
    img.addEventListener('load', function(){ updatePhotoGridCount(grid); });
    img.addEventListener('error', function(){ updatePhotoGridCount(grid); });
  });
});

// Tap a journey photo to see it full-size and uncropped, since the frames
// themselves always crop to a fixed tile shape.
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src, alt){
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('open');
}
function closeLightbox(){
  lightbox.classList.remove('open');
}

document.querySelectorAll('.photo-slot img').forEach(function(img){
  img.addEventListener('click', function(e){
    e.stopPropagation();
    if(img.closest('.photo-slot').classList.contains('img-missing')) return;
    openLightbox(img.src, img.alt);
  });
});
lightbox.addEventListener('click', closeLightbox);
