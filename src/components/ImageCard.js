import React from 'react'

const ImageCard = () => {
    return (
        <div className="font-body max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://source.unsplash.com/random" alt=""/>
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                Photo By John Doe
                </div>
                <ul>
                <li><strong>Views:</strong> 400</li>
                <li><strong>Downloads:</strong> 300</li>
                <li><strong>Likes:</strong> 400</li>
                </ul>
                <div className="py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag2
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #tag3
                </span>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
