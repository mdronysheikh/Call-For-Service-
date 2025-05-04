import React from "react";
import { useTranslation } from "react-i18next";

const team = [
  { name: "সাজ্জাদ", works: ["ইলেকট্রিক কাজ", "পেইন্টিং"], photo: "https://via.placeholder.com/100" },
  { name: "রানা", works: ["টাইলস লাগানো", "প্লাস্টারিং"], photo: "https://via.placeholder.com/100" },
  { name: "রবিন", works: ["পাইপ ফিটিং", "মেরামত"], photo: "https://via.placeholder.com/100" },
];

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ padding: 20 }}>
      <h1>{t('callForService')}</h1>
      <p>{t('name')}: Md Rony Sheikh</p>
      <p>{t('phone')}: 01577087028</p>
      <button onClick={() => i18n.changeLanguage(i18n.language === 'bn' ? 'en' : 'bn')}>
        {i18n.language === 'bn' ? 'English' : 'বাংলা'}
      </button>
      <h2>{t('teamMembers')}</h2>
      <div style={{ display: 'flex', gap: 20 }}>
        {team.map((member, index) => (
          <div key={index} style={{ border: '1px solid gray', padding: 10 }}>
            <img src={member.photo} alt={member.name} width="100" />
            <h3>{member.name}</h3>
            <ul>
              {member.works.map((work, i) => (
                <li key={i}>{work}</li>
              ))}
            </ul>
            <button>{t('edit')}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;