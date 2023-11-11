"use client"
import { useEffect } from 'react';

export default function HubSpotForm() {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      document.body.appendChild(script);
 
      script.addEventListener('load', () => {
         if(window.hbspt) {
            window.hbspt.forms.create({
                portalId: '143618104',
                formId: '6f9af819-8629-4a19-b4cd-4e817a18d19e',
                target: '#hubspotForm',
                cssClass: ""
            });
         }
      });
    }, []);
 
    return (
       <div id="hubspotForm" className="hubspotForm"></div>
    );
 }