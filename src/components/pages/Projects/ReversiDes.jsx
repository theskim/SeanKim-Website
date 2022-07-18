import "./Style.css";
import Project from "./ProjectSample";
import { ReversiFirst, ReversiSecond, ReversiThird } from '../../../assets';

const images = [
  ReversiFirst, 
  ReversiSecond, 
  ReversiThird 
];

const ReversiDes = () => {
    const reversi = {
        title: "Reversi AI",
        date: "Mar 2022",
        skills: "C",
        img: images,
        description: "A 3-week long course project to create a \"strong\" Reversi game algorithm. " +
                    "To simply put, my idea was the following: playing two " +
                    "\"worse\" algorithms against each other. " +
                    "\"Worse algorithm\" selects a move based on the number of pieces flipped right away. " +
                    "Then we simulate five or six moves, and see which move has the highest " +
                    "amount of pieces flipped out of all possible moves. " +
                    "Through this project, I became more familiar with the syntax of C and " +
                    "deterministic algorithms. " +
                    "The source code will not be available due to the " +
                    "possibility of assisting potential academic misconduct.",
        link: {
                availability: false,
              }, 
        github: {
            availability: false,
        }, 
    }

    return (
        <Project project={reversi}/>
    );
}

export default ReversiDes;