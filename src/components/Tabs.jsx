import React, { useState } from "react";
import product1 from "../assets/1mdm-product-1.png";
import product2 from "../assets/1mdm-product-2.png";
import product3 from "../assets/1mdm-product-3.png";
import product4 from "../assets/1mdm-product-4.png";

const tabs = [
    {
        id: "custom-storefront",
        title: "Custom Storefront",
        content: {
            heading: "Set up a store that showcases your brand",
            text: "Differentiate yourself from the competition with a full store dedicated to your products—no coding or design skills necessary!",
            image: product1,
        },
    },
    {
        id: "advertising-tools",
        title: "Advertising Tools",
        content: {
            heading: "Increase exposure by up to 120% with a suite of smart advertising tools.",
            text: "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
            image: product2,
        },
    },
    {
        id: "data-analytics",
        title: "Data and Analytics",
        content: {
            heading: "Optimize your every move with in-depth data and customer insights",
            text: "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more!",
            image: product3,
        },
    },
    {
        id: "customer-support",
        title: "Customer Support",
        content: {
            heading: "Know you’re supported throughout your journey",
            text: "From onboarding help to online chats to local support during business hours and account optimization tips—we’re here for you.",
            image: product4,
        },
    },
];

function TabsSection() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="py-12">
            <div className="max-w-[1320px] mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#a10005]">
                    Grow your business with a suite of tools built for you
                </h2>
                <div className="flex flex-col md:flex-row mt-10">
                    {/* Tab Buttons */}
                    <div className="md:w-1/4 flex flex-col pr-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`py-8 px-5 text-left font-semibold border-l-1 border-gray-300
                                     ${activeTab === tab.id
                                        ? "text-[#a10005] border-l-8 border-red-600"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="md:w-3/4 p-6">
                        {tabs.map((tab) =>
                            activeTab === tab.id ? (
                                <div key={tab.id} className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="md:w-1/2">
                                        <h3 className="text-2xl font-semibold">{tab.content.heading}</h3>
                                        <p className="mt-3 text-gray-600">{tab.content.text}</p>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img
                                            src={tab.content.image}
                                            alt="Product"
                                            className="w-full rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabsSection;