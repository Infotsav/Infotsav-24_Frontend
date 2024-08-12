import React from "react";

const ContactTab: React.FC = () => {
  const contacts = [
    { name: "Name of contact 1", phone: "+91 0123456789" },
    { name: "Name of contact 2", phone: "+91 0123456789" },
    { name: "Name of contact 3", phone: "+91 0123456789" },
  ];

  return (
    <div className="flex flex-col gap-3 sm:flex-row justify-center items-center sm:space-x-10 text-center text-white">
      {contacts.map((contact, index) => (
        <div key={index} className="flex flex-col">
          <p className=" text-md leading-relaxed tracking-wider sm:text-md md:text-2xl">
            {contact.name}
          </p>
          <p className="text-sm md:text-xl">{contact.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactTab;
