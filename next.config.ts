import type { NextConfig } from "next";
import os from "node:os";

function getAllowedDevOrigins(): string[] {
	const origins = new Set<string>(["localhost", "127.0.0.1", "0.0.0.0"]);

	for (const networkGroup of Object.values(os.networkInterfaces())) {
		for (const network of networkGroup ?? []) {
			if (network.family === "IPv4" && !network.internal) {
				origins.add(network.address);
			}
		}
	}

	const configuredOrigins = process.env.NEXT_ALLOWED_DEV_ORIGINS
		?.split(",")
		.map((origin) => origin.trim())
		.filter(Boolean);

	for (const origin of configuredOrigins ?? []) {
		origins.add(origin);
	}

	return [...origins];
}

const nextConfig: NextConfig = {
	allowedDevOrigins: getAllowedDevOrigins(),
};

export default nextConfig;
