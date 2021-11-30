import config from "./config.json"

export function getNetworkId()
{
    return config.Network ?? 56;
}