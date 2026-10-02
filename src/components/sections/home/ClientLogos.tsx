import Image from "next/image";
import { Container } from "@/components/layout/Container";

const clients = [
    { name: "Airflow Systems", src: "/images/clients/client-airflow.png" },
    { name: "Vind-Ya", src: "/images/clients/client-vindya.png" },
    { name: "Damro", src: "/images/clients/client-damro.png" },
    { name: "NRC", src: "/images/clients/client-nrc.webp" },
    { name: "Marino-Mall", src: "/images/clients/client-marino-mall.png" }
];

export function ClientLogos() {
    // Duplicate array multiple times for a seamless endless flex marquee
    const marqueeClients = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

    return (
        <section className="client-logos-section" aria-labelledby="clients-heading">
            <Container>
                <div className="client-logos__header">
                    <p className="client-logos__eyebrow">
                        <span aria-hidden="true" />
                        Our Portfolio
                    </p>
                    <h2 id="clients-heading" className="client-logos__title">
                        Trusted By Industry Leaders Across Sri Lanka
                    </h2>
                    <p className="client-logos__intro">
                        We provide professional security solutions to premium businesses and corporations, ensuring their assets, people, and property are constantly protected with excellence.
                    </p>
                </div>

                <div className="client-logos__marquee-wrapper">
                    <div className="client-logos__track">
                        {marqueeClients.map((client, idx) => (
                            <div key={`client-${idx}`} className="client-logos__logo-card">
                                <Image
                                    src={client.src}
                                    alt={`${client.name} logo`}
                                    width={180}
                                    height={80}
                                    className="client-logos__image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
