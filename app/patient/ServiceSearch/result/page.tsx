
export default function ResultPage({ params }: { params: { search_query: string } }) {

    return( 
     <div className="w-full h-2/3 items-center flex flex-col">
        <h2 className="w-2/5">Результат: {params.search_query}</h2>
     </div>
    )
}