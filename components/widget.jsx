import { Link } from '@aws-amplify/ui-react';

const Widget = ({ title, detailList, seeMoreLink }) => {
    return (
        <div className='w-full md:w-1/3 away-blue-bg'>
            <div className='catalog-card flex flex-wrap shadow-lg bg-white rounded mt-2 md:ml-2 md:mb-2 md:mt-0 p-4'>
                <div className='grid text-4xl w-full'>
                    <span className='pt-4 away-blue-text'>{ title }</span>
                </div>
                <div className='flex flex-wrap w-full'>
                    {
                        detailList.map(detail => {
                            return (
                                <div className='w-full my-2 flex flex-row justify-between' key={detail.label}>
                                    <span className='grid md-blue-text text-2xl'>{ detail.label }</span>
                                    <span className='grid team-red text-2xl text-right'>{ detail.value }</span>
                                </div>
                            )
                        })
                    }
                </div>
                <span className='grid place-items-center text-sm text-teal-400 w-full'>
                    <Link href={seeMoreLink}>
                        see more
                    </Link>
                </span>
            </div>
        </div>
    )
};

export default Widget;