"use client"
import { useEffect } from 'react';
import styleButtonInIframe from  '../../styles/hubspotForm.js';

export default function HubSpotFormHome() {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
      document.body.appendChild(script);
 
      script.addEventListener('load', () => {
         if(window.hbspt) {
            window.hbspt.forms.create({
                portalId: '143618104',
                formId: '30b211db-b3be-422f-ba1c-5c1729fd8aa4',
                target: '#hubspotFormHome',
                cssClass: ""
            });
         }
      });
      setTimeout(() => {
      styleButtonInIframe();
      }, 2000);

    }, []);
 
    return (
       <div className="hubspotForm p-8 container bg-white">
        <h1 className='text-3xl font-semibold dark:text-primary'>Get in Touch
            <div id="hubspotFormHome" > </div>
        </h1>
       </div>
    );
 }