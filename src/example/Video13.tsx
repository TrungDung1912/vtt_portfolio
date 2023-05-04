interface IProps {
    name?: string, //required => optional
    age?: number,
    address?: string
}

const Video13 = (props: IProps) => {
    //props là javascript object
    const { name = "Beo", age, address } = props;

    // const person = {
    //     name: 'Eric',
    //     age: 25,
    //     address: 'Hỏi Dân IT'
    // }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring


    return (
        <div>
            Example in video 13 - hello word with {name}
        </div>
    )
}

export default Video13;