import * as tfnode from '@tensorflow/tfjs-node';
import * as mobilenet from '@tensorflow-models/mobilenet';
var model;

export const classifyImage = async (img) => {
  try {
    if (!model) {
        model = await mobilenet.load();
    }
    const tfimage = tfnode.node.decodeImage(img.buffer);
    const predicitions = await model.classify(tfimage);
    return predicitions;
  } catch (err) {
      console.log(err);
    throw err;
  }
};
