import axios from "axios"


export default () => {
    return (axios.create({
        baseURL: "https://api-test.cloudareus.com/api/"
    }))
}
