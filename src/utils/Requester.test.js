import * as requester from './Requester';
jest.mock('./Requester');

describe('Requester functions API',() => {
  // The assertion for a promise must be returned.
  it('works with promises', async () => {
    const endpoint = 'http://localhost:3000/profile'
    const data = {
      "picture": "http://placehold.it/32x32",
      "firstName": "Bruce",
      "lastName": "Kaufman",
      "birthDate": "Wed Jan 11 2006 09:06:17 GMT+0000 (UTC)",
      "aboutMe": {
        "es": "Eiusmod nostrud consectetur qui nulla magna nulla enim. Anim incididunt amet mollit ipsum eiusmod ad nostrud occaecat nisi irure esse ut ipsum culpa. Mollit et veniam aliqua laboris quis reprehenderit. Fugiat consectetur nulla labore commodo magna anim exercitation consequat exercitation do mollit.",
        "en": "Aliqua ea proident adipisicing exercitation esse dolor nulla officia consectetur aliqua veniam. Quis amet fugiat pariatur et cillum officia velit ipsum irure. Minim duis ex esse excepteur cillum quis Lorem sit tempor elit anim ullamco velit pariatur. Cillum irure eu proident dolore dolor cupidatat est cupidatat aute magna minim anim amet cillum. Non veniam quis irure ipsum. Duis amet ex culpa enim. Cupidatat amet labore laboris pariatur."
      },
      "contact": {
        "phone": "(954) 495-3327",
        "email": "bruce.kaufman@test.test",
        "linkedin": "https://www.linkedin.com/feed/"
      }
    };
    expect.assertions(1);
    await expect(requester.get(endpoint)).resolves.toEqual(data);

  });
});