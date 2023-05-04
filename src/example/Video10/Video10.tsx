import { useState } from "react";
import './Video10.css'

// export interface IUiem {
//     name: string,
//     age: number
// }

export interface IUser {
    name: string,
    age: number | string,
    city: string
}

interface IIu {
    defaultName: string,
    defaultAge: number | string
}

const Video10 = (props: IIu) => {
    const { defaultName, defaultAge } = props
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectedCity, setSelectedCity] = useState<string>("Hà Nội")

    const [users, setUsers] = useState<IUser[]>([])

    // const [test, setTest] = useState<IUiem | null>(null)

    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            city: selectedCity,
        }
        setUsers([...users, user])
        setName("")
        setAge("")
    }

    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input onChange={(e) => setName(e.target.value)} type="text" value={name} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input onChange={(e) => setAge(e.target.value)} type="text" value={age} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        {city.map(item => {
                            return (
                                <option value={item} key={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>

                <input onClick={handleSubmit} type="submit" value="Submit" />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.city}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;