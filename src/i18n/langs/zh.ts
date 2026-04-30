export default {
    nav: {
        policy: "政策",
        nodes: "节点",
        contact: "联系",
    },
    hero: {
        title: "DN42 节点信息",
        subtitle: "我们采用开放的对等互联政策，欢迎友善联系我们进行对等互联。",
    },
    policy: {
        title: "Peering 政策",
        advertiseLabel: "我们宣告以下地址段：",
        disclaimer: "本网络为实验和教育用途，不提供 SLA 保障。我们会尽最大努力保持运行，但不对因不可抗力或个人财务原因导致的服务中断承担责任。",
        items: ["仅支持 WireGuard 隧道", "长时间无法联系可能会终止连接", "推荐使用 MP-BGP + Extended Next Hop + IPv6 LLA", "默认端口：20000 + 您 ASN 的后 4 位", "支持 IPv4 / IPv6 单栈隧道端点（使用 4. 或 6. 前缀）", "MTU: IPv4/IPv6 均为 1420 字节"],
    },
    nodes: {
        title: "节点列表",
    },
    node: {
        provider: "托管商",
        endpoint: "WireGuard 端点",
        pubkey: "WireGuard 公钥",
        routing: "DN42 路由地址",
        lla: "IPv6 LLA",
        statusOpen: "开放",
        statusWarning: "注意",
    },
    contact: {
        title: "联系我们",
        subtitle: "选择您喜欢的方式与我们取得联系",
    },
    copySuccess: "已复制",
    copyFail: "复制失败",
}
