import axios from 'axios';
import fs from 'fs';
import FormData from "form-data";

const upload = async () => {
  try {
    const file = fs.createReadStream('./tylacute.jpg');
    const title = 'tylacute.jpg';

    const form = new FormData();
    form.append('title', title);
    form.append('file', file);

    console.log('here');

    const resp = await axios.post('http://localhost:3000/upload', form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    console.log('here');

    if (resp.status === 200) {
      return 'Upload Complete';
    }
  } catch (err) {
    return new Error(err.message);
  }
};

upload().then((resp) => console.log(resp));
