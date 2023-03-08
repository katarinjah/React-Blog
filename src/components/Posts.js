import "./Posts.css"
import { LoremIpsum } from "lorem-ipsum";

export const Posts = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 2,
      min: 2
    },
    wordsPerSentence: {
      max: 10,
      min: 7,
    }
  });

  let posts = [];

  for (let i = 1; i <= 6; i++) {
    let title = lorem.generateWords(3);
    let intro = lorem.generateSentences(2);
    let post = (
      <div className="row post mx-auto">
        <div className="col">
          <h4 className="title">{title}</h4>
          <p className="intro">{intro}</p>
        </div>
      </div>
    );
    posts.push(post);
  }

  return <div>{posts}</div>;
};
