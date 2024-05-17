import React from 'react'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2">
            <QuestionsDetails />
            <RightSidebar />
        </div>
    </div>
  )
}

export default DisplayQuestion;