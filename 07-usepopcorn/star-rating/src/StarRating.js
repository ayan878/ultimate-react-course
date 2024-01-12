export default function StarRating(){
    return <div><div>{Array.from ({length:5}, (_,i)=><span>S{i}</span>)}</div></div>
}