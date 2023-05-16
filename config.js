// 首页的8个产品类型展示
var indexClassList = [
    {
        imgSrc: "/static/upload/20221009/1665290611886497.jpg",
        imgAlt: "变频器",
        title: "变频器",
        context: "通用型PMC600系列CODESYS标准平台，支持IEC标准及PLCopen标准本地接口丰富，本机6···",
        type: 1
    },
    {
        imgSrc: "/static/upload/20221009/1665290508539550.jpg",
        imgAlt: "伺服系统",
        title: "伺服系统",
        context: "iSV2-CAN系列驱动器与电机完美结合，减少接线，节省空间电气接口丰富、布局合理、简洁美观优良的散···",
        type: 2
    },
    {
        imgSrc: "/static/upload/20221009/1665289895796064.jpg",
        imgAlt: "人机界面",
        title: "人机界面",
        context: "LD2-CAN系列体积更小，易于安装过载更强、响应更快内詈抱闸电源支持17位/23位绝对值编码器丰富···",
        type: 3
    },
    {
        imgSrc: "/static/upload/20221009/1665289759745178.jpg",
        imgAlt: "PLC运动控制器",
        title: "PLC运动控制器",
        context: "DM-S/DM V3.0系列升级型性能提升10%~25%功能增加十余项兼容传统DM/M/ND系列抗干···",
        type: 4
    },
    {
        imgSrc: "/static/upload/20221009/1665290611886497.jpg",
        imgAlt: "远程IO模块",
        title: "远程IO模块",
        context: "通用型PMC600系列CODESYS标准平台，支持IEC标准及PLCopen标准本地接口丰富，本机6···",
        type: 5
    },
    {
        imgSrc: "/static/upload/20221009/1665290508539550.jpg",
        imgAlt: "中空旋转平台",
        title: "中空旋转平台",
        context: "iSV2-CAN系列驱动器与电机完美结合，减少接线，节省空间电气接口丰富、布局合理、简洁美观优良的散···",
        type: 6
    },
    {
        imgSrc: "/static/upload/20221009/1665289895796064.jpg",
        imgAlt: "UVW对位平台",
        title: "UVW对位平台",
        context: "LD2-CAN系列体积更小，易于安装过载更强、响应更快内詈抱闸电源支持17位/23位绝对值编码器丰富···",
        type: 7
    },
    {
        imgSrc: "/static/upload/20221009/1665289759745178.jpg",
        imgAlt: "直线模组/电动滑台",
        title: "直线模组/电动滑台",
        context: "DM-S/DM V3.0系列升级型性能提升10%~25%功能增加十余项兼容传统DM/M/ND系列抗干···",
        type: 8
    },
];

// 产品中心的分类
var classification = [
    {
        name: "全部",
        type: 0
    },
    {
        name: "变频器",
        type: 1
    },
    {
        name: "伺服系统",
        type: 2
    },
    {
        name: "人机界面",
        type: 3
    },
    {
        name: "PLC运动控制器",
        type: 4
    },
    {
        name: "远程IO模块",
        type: 5
    },
    {
        name: "中空旋转平台",
        type: 6
    },
    {
        name: "UVW对位平台",
        type: 7
    },
    {
        name: "直线模组/电动滑台",
        type: 8
    },
]

//全部产品
/**
 * title： 产品名
 * context：产品列表页描述
 * imgUrl： 产品列表页图片
 * imgAlt：产品列表页图片鼠标提示
 * type：类型 对应classification
 * id
 * updataTime： 详情页上架时间
 * brand：详情页产品品牌
 * price：价格
 * goodsImgList：详情页产品轮播图
 * goodsContext: 详情页产品简介
 * peculiarityList: 特点列表
 * goodsDetailsImgList: 产品详情图片
 * downloadList: 下载链接
 */
var allGoodsList = [
    {
        title: "MotiFlex e180伺服驱动器",
        context: "MotiFlex e180伺服驱动器MotiFlex e180是一款支持多种以太网协议的通用型伺服驱动器，其出色的运动控制性能···",
        imgUrl: "/static/upload/20220401/1648749635625597.jpg",
        imgAlt: "MotiFlex e180伺服驱动器",
        type: 1,
        id: 10001,
        updataTime: "2023-05-16",
        brand: "品牌",
        price: "1888￥",
        goodsImgList: [
            "/static/upload/20230516/1.png",
            "/static/upload/20230516/2.png",
            "/static/upload/20230516/3.png",
        ],
        goodsContext: "MotiFlex e180是一款支持多种以太网协议的通用型伺服驱动器，其出色的运动控制性能、丰富的运动控制功能和优秀的可靠性，为您的生产和制造带来高效的生产力和持续的性能改进。",
        peculiarityList: [
            "用于三相电网，电压范围为200至480 V AC",
            "可通过软件灵活选择多种以太网协议",
            "可通过高级运动编程语言Mint实现多任务控制，例如通信、逻辑、运动及HMI交互控制",
            "支持HIPERFACE DSL单电缆方案",
            "支持2倍及3倍过载，最大过载时间可达3 s",
            "集成符合EN61800-5-2标准的安全转矩关断（STO）功能",
            "灵活的选件配置，实现功能扩展"
        ],
        goodsDetailsImgList: [
            "/static/upload/20230516/4.jpg",
            "/static/upload/20230516/5.jpg",
            "/static/upload/20230516/6.jpg",
            "/static/upload/20230516/7.jpg",
            "/static/upload/20230516/8.jpg",
            "/static/upload/20230516/9.jpg"
        ],
        downloadList: [
            {
                name: "用户手册下载",
                link: "/static/upload/20230516/用户手册.pdf"
            },
            {
                name: "产品尺寸图下载",
                link: "/static/upload/20230516/产品尺寸图.pdf"
            }
        ]
    },
    {
        title: "MicroFlex e190伺服驱动器",
        context: "MicroFlex e190伺服驱动器MicroFlex e190是一款支持多种以太网协议的紧凑型伺服驱动器，其出色的运动控制性···",
        imgUrl: "/static/upload/20220401/1648750133873501.jpg",
        imgAlt: "MicroFlex e190伺服驱动器",
        type: 1,
        id: 10002
    },
    {
        title: "eSM伺服电机",
        context: "eSM伺服电机eSM系列电机是一款高转矩精度、低转速波动的伺服电机。其优秀的动态性能和高分辨率反馈可满足各···",
        imgUrl: "/static/upload/20220401/1648780260683391.jpg",
        imgAlt: "eSM伺服电机",
        type: 2,
        id: 10003
    },
    {
        title: "HDS高性能交流永磁伺服电机",
        context: "HDS高性能交流永磁伺服电机HDS高性能交流永磁伺服电机，采用业界领先设计理念，全面考虑行业需求，融合多项···",
        imgUrl: "/static/upload/20220401/1648793547857540.jpg",
        imgAlt: "HDS高性能交流永磁伺服电机",
        type: 2,
        id: 10004
    },
    {
        title: "DM(I)自冷电机",
        context: "",
        imgUrl: "/static/upload/20220401/1648803517323637.jpg",
        imgAlt: "DM(I)自冷电机",
        type: 2,
        id: 10005
    },
    {
        title: "AC500-eCo",
        context: "AC500-eCoABB AC500-eCo 是一款小型、可升级和灵活的PLC，为您提供低成本的自动化解决方案。可升级AC500平台···",
        imgUrl: "/static/upload/20220401/1648802184986502.jpg",
        imgAlt: "AC500-eCo",
        type: 3,
        id: 10006
    },
    {
        title: "CX9020 | 嵌入式控制器",
        context: "CX9020 | 嵌入式控制器产品概览表产品搜索器适用于各种应用场景的紧凑型 PC 控制器CX9020 是一款适合 DIN 导···",
        imgUrl: "/static/upload/20220401/1648801535582545.png",
        imgAlt: "CX9020 | 嵌入式控制器",
        type: 3,
        id: 10007
    },
    {
        title: "ACS180 – 经济型传动",
        context: "ACS180 –经济型传动经济易用，紧凑型设备的可靠之选ACS180变频器是ABB全新设计的经济型传动。它内置了所有···",
        imgUrl: "/static/upload/20220401/1648793880926519.jpg",
        imgAlt: "ACS180 – 经济型传动",
        type: 3,
        id: 10008
    },
]