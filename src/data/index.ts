export const myEmail = "i@sisy.cc"
export const myTelegramUrl = "https://t.me/sisiPh"

export const baseInfo = {
    as_name: "SISY AS",
    network_name: "SISY Network",
    from_date: "2026",
    asn_short: "2426",
    asn: "AS4242422426",
    ipv4: "172.23.15.32/27",
    ipv6: "fd24:ac8e:9e04::/48",
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
        code: "US-01",
        flag: "🇺🇸",
        location: "LA, United States",
        provider: "DMIT",
        endpoint_v4: "4.us.sisy.cc",
        endpoint_v6: "6.us.sisy.cc",
        endpoint_dual: "us.sisy.cc",
        pubkey: "ABB1rrObfQgP8mVdMa4DsRMRaqpTM3J3mqLI69zjOBQ=",
        lla: "fe80::2426:2",
        routing4: "172.23.15.34",
        routing6: "fd24:ac8e:9e04::2",
        status: "open",
    },
    {
        code: "JP-01",
        flag: "🇯🇵",
        location: "Tokyo, Japan",
        provider: "ISIF",
        endpoint_v4: "4.jp.sisy.cc",
        endpoint_v6: "6.jp.sisy.cc",
        endpoint_dual: "jp.sisy.cc",
        pubkey: "Lxky3cJSIBcAbovBWcLg82XldTbzaDoNJwQyf4cpFA8=",
        lla: "fe80::2426:3",
        routing4: "172.23.15.35",
        routing6: "fd24:ac8e:9e04::3",
        status: "open",
    },
]
