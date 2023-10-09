export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'event_title',
      type: 'string',
      title: 'Event navn',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'event_description',
      type: 'text',
      title: 'Fullstendig beskrivelse',
    },
    {
      name: 'event_type',
      type: 'string',
      title: 'Type event',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Bedriftspresentasjon', value: 'bedpres'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Sosialt Arrangement', value: 'social'},
          {title: 'Annet', value: 'other'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'event_start_time',
      type: 'datetime',
      title: 'Tidspunkt',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'event_max_attendees',
      type: 'number',
      title: 'Maks antall deltakere',
    },
    {
      name: 'event_registration_deadline',
      type: 'datetime',
      title: 'Påmeldingsfrist',
    },
    {
      name: 'event_address_text',
      type: 'string',
      title: 'Adresse',
    },
    {
      //? Her trengs det en plugin for å få et kart man kan velge posisjon på
      name: 'event_address_geopoint',
      type: 'geopoint',
      title: 'Kart lokasjon',
    },
    {
      name: 'event_image',
      type: 'image',
      title: 'Forsidebilde',
    },
    {
      name: 'event_application_url',
      type: 'url',
      title: 'Lenke til påmelding',
    },
    {
      name: 'event_slug',
      type: 'slug',
      title: 'Generert event url',
      validation: (Rule) => Rule.required(),
      options: {
        readonly: true,
        source: 'event_title',
      },
    },
  ],
}
