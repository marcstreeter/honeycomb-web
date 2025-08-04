export interface Review {
  id: number;
  customerName: string;
  quote: string;
  customerImage?: string | null;
  stars?: number;
  logo?: 'google' | 'facebook';
  customerTitle?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    customerName: 'Jen R.',
    quote:
      'Did a fantastic job with my new air duct for kitchen remodel! Very knowledgeable and explained all options. Cleaned up the site when done. Dorian and Manuel did great!!',
  },
  {
    id: 2,
    customerName: 'Josh G.',
    quote:
      'Aaron & Manuel were absolutely phenomenal. Top notch service, would recommend 10 out 10 times. Responded quickly to the service call, extremely professional, and treated me (and my dogs) like family. My new go to for AC work.',
  },
  {
    id: 3,
    customerName: 'Shannon S.',
    quote:
      'They did a great job, very respectful and professional , I would definitely have Sergio and Angel out again, Thank you!!!',
  },
  {
    id: 4,
    customerName: 'Shelley E.',
    quote:
      'Honeycomb provided excellent, prompt service and kept us informed every step of the way. Sergio and Angel were clean and efficient and even our dog liked them. Great service all around, thank you!!',
  },
  {
    id: 5,
    customerName: 'Von B.',
    quote:
      'If I could give a 1000 star rating to Honeycomb and Dorian, I would do it with all of my heartbeats! Honeycomb Heating and Cooling, and Dorian Hernandez, the technician who provided the services required to repair my A/C unit, are truly godsent. My A/C unit quit blowing cold air at 5pm-ish on a Friday evening. Honeycomb was contacted, and Dorian showed up to fix the unit about two hours later on a FRIDAY NIGHT! WHAT?! I was so grateful that the time was taken, at that time of weekend hours, to repair and maintenance the unit, as 100+ degree temperatures were predicted for the next few days. Dorian was so kind and thoughtful, and he informed me of all the issues he found in the maintenance of the system. He also took the time to show me how to do basic maintenance myself and offered tips to keep it in top working condition. The entire repair and maintenance took about 3-4 hours on a FRIDAY NIGHT, and he never complained about that, or rushed anything. He was very thorough and he was in great spirit the entire time. He made sure that I was comfortable with the information and instructions that he provided before leaving (after 10pm!), and left with a smile and a hand shake. As a small business owner myself, Dorian is the epitome of the perfect representative and employee of a company, and Honeycomb is very fortunate to have him on board. Thank you so much to Honeycomb and to Dorian for the above and beyond service provided so that we could enjoy our very hot weekend in the cooling power of the A/C! Thanks for your amazing business standards and your willingness to take care of your customers!',
  },
  {
    id: 6,
    customerName: 'Charles G.',
    quote:
      "I work with Honeycomb AC Heating and Cooling on a weekly basis through my professional role, and I can confidently say they are one of the most reliable and efficient vendors I've had the pleasure of working with. Their communication, attention to detail, and quality of work have consistently impressed me and my team. They go above and beyond to get the job done right the first time. Because of the trust they've earned with our company, I didn't hesitate to call them when I needed help in my own home. I was dealing with a problem where one of our bathrooms was getting too much airflow, causing condensation at the AC register and resulting in some mold growth on the ceiling. Honeycomb sent a technician out promptly. While my family was home, they were extremely professional, respectful, and courteous. They diagnosed and resolved the issue efficiently, cleaned up after themselves, and the price was very fair. It's not easy to find a company that delivers this level of consistency and integrity in both commercial and residential settings. I highly recommend Honeycomb AC to anyone looking for dependable, honest, and skilled HVAC service.",
  },
  {
    id: 7,
    customerName: 'Garrett M.',
    quote:
      "I'm a DIY handman sort of guy but after my own troubleshooting revealed that it wasn't the capacitor and I made the rookie mistake of not adequately checking the fan, I called in the professionals and they quickly identifed the fan motor as the problem. I probably could've replaced it myself but their price was fair and it's always nice to have the piece of mind of having a professional installation that avoids any additional rookie mistakes that could damage other components. My point is, Honeycomb is the sort of company that a handyman trusts to do the work. Fernando and his partner arrived right in the middle of the appointment window and I even received a tracking text that let me see when they left and how far away they were. The job was done quickly and Fernando even let me watch and he explained things so I could be more knowledgeable and capable in the event of a future issue, which I greatly appreciated.",
  },
];
