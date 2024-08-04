import { contacts } from "../../constants/contacts";

type ContactInfoProps = {};

const ContactInfo = ({}: ContactInfoProps) => {
  return (
    <section className="flex flex-col gap-4 font-semibold">
      <div>
        <h3 className="text-[#6C91FF] font-bold text-3xl mb-1">Address:</h3>
        <p>Department of Electrical & Electronics Engineering (EEE), C-Block</p>
        <p className="mt-5">
          Atal Bihari Vajpayee Institute of Information Technology and
          Management, Gwalior, Madhya Pradesh - 474015
        </p>
      </div>
      <div>
        <h3 className="text-[#6C91FF] font-bold text-3xl mb-1">Contacts:</h3>
        {contacts.map((contact, index) => {
          return (
            <div key={index}>
              <h4 className="text-[#6C91FF] font-semibold text-xl">
                {contact.name}
              </h4>
              <p>{contact.number}</p>
              <p>{contact.email}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactInfo;
