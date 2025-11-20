import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";


const projects = [
  {
  id: 1,
  name: "EdCare - Online Education Platform",
  purpose:
    "A modern e-learning platform with course categories, filtering system, detailed dynamic pages, student dashboard and a fully responsive UI — built using Next.js and Tailwind CSS.",
  roles: {
    admin: [
      "Manage courses & categories",
      "Approve and update course content",
      "Monitor enrollments and user activity"
    ],
    student: [
      "Browse & filter courses",
      "Add courses to wishlist",
      "View detailed course pages",
      "Enroll and track learning progress"
    ]
  },
  keyFeatures: [
    "Dynamic course filtering",
    "Wishlist system",
    "Responsive design",
    "Dynamic routing for course details",
    "Smooth page animations",
    "Modern UI with Tailwind CSS"
  ]
}
,
  {
    id: 2,
    name: "Nest Mart",
    purpose:
      "A modern e-commerce web application developed using React, Tailwind CSS, and React Router, product filtering features for an engaging shopping experience.",
    roles: {
      admin: ["Manage products & categories", "Monitor users", "Handle orders"],
      customer: ["Browse products", "Add to cart & wishlist", "Checkout securely"],
    },
    keyFeatures: [
      "Dynamic product filtering",
      "Cart and wishlist functionality",
      "Responsive design for all devices",
      "Smooth navigation using React Router",
      "Modern UI built with Tailwind CSS",
    ],
  },
  {
    id: 3,
    name: "ShopHeaven",
    purpose:
      "ShopHeaven is a modern e-commerce platform built with React, Tailwind CSS, and React Router, featuring dynamic product filtering, cart and wishlist management, and a smooth, responsive shopping experience.",
    roles: {
      admin: ["Manage products & categories", "View orders", "Manage users"],
      customer: ["Search & filter products", "Add to cart & wishlist", "Place orders"],
    },
    keyFeatures: [
      "Seamless shopping experience",
      "Dynamic filtering and sorting of products",
      "Cart & wishlist integration",
      "Responsive design for desktop and mobile",
      "Built with React, Tailwind CSS, React Router",
    ],
  },
 {
  id: 4,
  name: "Tourex - Travel Booking",
  purpose:
    "A clean and modern travel booking app with tour filtering, detailed pages, cart system and smooth UI – built using React and Tailwind CSS.",
  roles: {
    admin: ["Manage tours & users", "Approve packages", "View bookings"],
    customer: ["Browse & filter tours", "Add to cart & wishlist", "Book tours"],
  },
  keyFeatures: [
    "Smart tour filtering",
    "Cart and wishlist",
    "Responsive design",
    "Smooth page transitions",
    "Beautiful UI with Tailwind",
  ],
},
 {
  id: 4,
  name: "Tourex - Travel Booking",
  purpose:
    "A clean and modern travel booking app with tour filtering, detailed pages, cart system and smooth UI – built using React and Tailwind CSS.",
  roles: {
    admin: ["Manage tours & users", "Approve packages", "View bookings"],
    customer: ["Browse & filter tours", "Add to cart & wishlist", "Book tours"],
  },
  keyFeatures: [
    "Smart tour filtering",
    "Cart and wishlist",
    "Responsive design",
    "Smooth page transitions",
    "Beautiful UI with Tailwind",
  ],
},

];



const ProjectsDetails = ({ isOpen, close, storeId }) => {
    const [details, setDetails] = useState({});

    useEffect(() => {
        const getProjects = projects.find(
            (item) => parseInt(item.id) === parseInt(storeId)
        );
        setDetails(getProjects);
    }, [storeId]);

    if (!details) return null;

    return (
        <Dialog
            open={isOpen}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={close}
        >

            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />


            <div className="fixed inset-0 z-20 flex min-h-full items-center justify-center p-4">
                <DialogPanel
                    transition
                    className="w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-xl bg-white/10 p-5 backdrop-blur-xl shadow-lg border border-white/20 duration-300 ease-out text-white"
                >

                    <DialogTitle
                        as="h3"
                        className="text-lg font-semibold text-center mb-3"
                    >
                        {details.name}
                    </DialogTitle>


                    <p className="text-white/80 text-sm mb-3">{details.purpose}</p>


                    <div className="mb-3">
                        <h4 className="font-semibold text-base mb-2">Roles & Permissions</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            {Object.entries(details.roles || {}).map(([role, actions]) => (
                                <div key={role} className="bg-white/10 p-2 rounded-lg">
                                    <p className="font-medium capitalize mb-1">{role}</p>
                                    <ul className="list-disc list-inside space-y-1 text-white/70 text-xs">
                                        {actions.map((a, i) => (
                                            <li key={i}>{a}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h4 className="font-semibold text-base mb-2">Key Features</h4>
                        <ul className="list-disc list-inside space-y-1 text-white/70 text-xs">
                            {details.keyFeatures?.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">


                        <button
                            onClick={close}
                            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-xs font-medium"
                        >
                            Close
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default ProjectsDetails;
