export default {
    nav: {
        policy: "Policy",
        nodes: "Nodes",
        contact: "Contact",
    },
    hero: {
        title: "DN42 Node Information",
        subtitle: "We have an open peering policy. Contact us friendly to peer.",
    },
    policy: {
        title: "Peering Policy",
        advertiseLabel: "We advertise the following prefixes:",
        disclaimer: "This network is experimental and educational, no SLA guaranteed. We will make our best efforts to maintain operation, but we are not responsible for any consequences caused by shutdown due to force majeure or personal financial reasons.",
        items: ["Only WireGuard tunnels are supported", "Connection may be terminated after long downtime", "MP-BGP + Extended Next Hop + IPv6 LLA is preferred", "Default port: 20000 + the last 4 digits of your ASN", "IPv4 / IPv6 single-stack endpoints are supported (use the 4. or 6. prefix)", "MTU: 1420 bytes for both IPv4/IPv6"],
    },
    nodes: {
        title: "Node List",
    },
    node: {
        provider: "Provider",
        endpoint: "WireGuard Endpoint",
        pubkey: "WireGuard Public Key",
        routing: "DN42 Routing",
        lla: "IPv6 LLA",
        statusOpen: "Open",
        statusWarning: "Warning",
    },
    contact: {
        title: "Contact Us",
        subtitle: "Choose your preferred way to get in touch",
    },
    copySuccess: "Copied",
    copyFail: "Copy failed",
}
