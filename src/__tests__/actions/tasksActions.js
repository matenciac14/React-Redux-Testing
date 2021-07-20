import { CreateNewTaskAction} from '../../actions/tasksAction'

const PayloadtaskMock = {
  "id": 123123,
  "name": "Jugo de Zanahoria",
  "description": "31111"
}

describe('Actions', () => {
  test('Createtask', ()=>{
    const expected ={
      type:'ADD_TASK_SUCCESS',
      payload: PayloadtaskMock
    } 
    expect(CreateNewTaskAction(PayloadtaskMock)).toEqual(expected)
  })
})