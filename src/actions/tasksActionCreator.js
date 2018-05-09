const FETCH_SERVICE = 'FETCH_SERVICE';

export const fetchService = () => ({
  type: FETCH_SERVICE,
  payload: [
    {
      serviceId: '01',
      data: {
        link: '/service/01',
        linkDescription: 'お支払・会員状態・退会について',
        serviceIcon: 'lounge'
      }
    },
    {
      serviceId: '02',
      data: {
        link: '/service/02',
        linkDescription: 'mobileについて',
        serviceIcon: 'mvno'
      }
    },
    {
      serviceId: '03',
      data: {
        link: '/service/03',
        linkDescription: '光について',
        serviceIcon: 'hikari'
      }
    },
    {
      serviceId: '04',
      data: {
        link: '/service/04',
        linkDescription: 'レンタルについて',
        serviceIcon: 'rental'
      }
    },
    {
      serviceId: '05',
      data: {
        link: '/service/05',
        linkDescription: 'サービスについて',
        serviceIcon: 'book'
      }
    }
  ]
});
