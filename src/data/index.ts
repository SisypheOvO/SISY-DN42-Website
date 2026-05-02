export const myEmail = "you@example.com"
export const myTelegramUrl = "https://t.me/your_handle"

export const githubUrl = "https://github.com/your-username/your-repository"
export const siteTitle = "Example Title"
export const i18nLocalKey = "network-website-template-lang"

export const baseInfo = {
    as_name: "Your AS",
    network_name: "Your Network",
    from_date: "2026",
    asn_short: "0000",
    asn: "AS4242420000",
    ipv4: "192.0.2.0/24",
    ipv6: "2001:db8::/32",
}

export type Locale = "zh" | "en"

export type NodeStatus = "open" | "warning"

export interface NodeEntry {
    code: string
    flag: string
    location: string
    provider: string
    endpoint_v4: string
    endpoint_v6: string
    endpoint_dual: string
    pubkey: string
    lla: string
    routing4: string
    routing6: string
    status: NodeStatus
    remark?: Record<Locale, string[]>
    remarkTone?: "info" | "warning"
}

export const nodes: NodeEntry[] = [
    {
        code: "NODE-01",
        flag: "🌐",
        location: "Sample Location, Country",
        provider: "Sample Provider",
        endpoint_v4: "4.node.example.com",
        endpoint_v6: "6.node.example.com",
        endpoint_dual: "node.example.com",
        pubkey: "REPLACE_WITH_YOUR_WG_PUBLIC_KEY",
        lla: "fe80::100",
        routing4: "172.23.0.2",
        routing6: "fd24:ac8e:9e04::2",
        status: "open",
    },
    {
        code: "NODE-02",
        flag: "🌐",
        location: "Sample Location, Country",
        provider: "Sample Provider",
        endpoint_v4: "4.node2.example.com",
        endpoint_v6: "6.node2.example.com",
        endpoint_dual: "node2.example.com",
        pubkey: "REPLACE_WITH_YOUR_WG_PUBLIC_KEY",
        lla: "fe80::101",
        routing4: "172.23.0.3",
        routing6: "fd24:ac8e:9e04::3",
        status: "open",
    },
]
