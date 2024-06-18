const Letter = ({ letter, score, size }) => {
    const letterClassName = size === 'small' ? 'text-[23px] h-[50px] w-[50px]' : 'h-[97px] w-[97px] text-[52px]'
    const scoreClassName = size === 'small' ? 'text-[18px]' : 'text-[23px]'
    return (
        <div className={'flex justify-center items-center uppercase bg-[#FFE3C1] relative shadow-[rgba(50,50,93,0.25)_0px_0px_3px_-3px,_rgba(0,0,0,0.3)_0px_5px_3px_-3px] ' + letterClassName}>
            {letter}
            <p className={'absolute w-full h-full pr-1 flex items-end justify-end top-0 bottom-0 ' + scoreClassName}>{score}</p>
        </div>
    )
}

export default Letter
