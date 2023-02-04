export function Button(props: any){
  return(
    <button className="w-52 h-12 border-2 border-[#F5D0FE] text-[#F5D0FE] backdrop-blur-3xl rounded hover:text-[#d63efb] hover:border-4 hover:border-[#d63efb] transition-all">
      {props.title}
    </button>
  )
}