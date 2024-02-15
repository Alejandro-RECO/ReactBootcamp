export const IconsList = ({icon,num, text}) =>{
  return(
    <span className={`flex text-${text} hover:text-gray-900 cursor-pointer transition-colors items-center text-gray-500`}>
      {icon}{num}
    </span>
  )
}