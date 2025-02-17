// /* TODO: 
//     1. Coordinate with the backend APIs (implemented)
//     2. Add a ComboBox component to replace the Picker component
//     3. CSS style for the menu and the buttons
// */

// import Taro from '@tarojs/taro'
// import { useState } from "react";
// import { Cell, Switch, Picker, Uploader, Button, DatePicker } from '@nutui/nutui-react-taro';
// import { TextArea } from '@nutui/nutui-react-taro';
// import { PickerOption } from '@nutui/nutui-react-taro/dist/types/packages/picker/types';

// // import {ComboBox} from 'src/components/combobox';
// import api from '../../api'

// type MemberData = {
//     avatar: string, // 头像
//     relationship: string, // 与本人关系
//     name: string // 成员姓名
//     gender: string // 性别
//     birthday: string // 出生日期
// }

// export default function addMember() {

//     const [record, setRecord] = useState<MemberData>({
//         avatar: '',
//         relationship: '',
//         name: '',
//         gender: '',
//         birthday: '',
//     });

//     const [idVisible, setIdVisible] = useState(false)
//     const [idDesc, setIdDesc] = useState('')
//     const confirmID = (options: PickerOption[], values: (string | number)[]) => {
//         let description = ''
//         options.forEach((option: any) => {
//             description += option.text
//         })
//         setIdDesc(description)
//         setRecord({
//             ...record,
//             id: values[0] as number,
//         });
//     }

//     const [nameVisible, setNameVisible] = useState(false)
//     const [nameDesc, setNameDesc] = useState('')
//     const confirmName = (options: PickerOption[], values: (string | number)[]) => {
//         let description = ''
//         options.forEach((option: any) => {
//             description += option.text
//         })
//         setNameDesc(description)
//         setRecord({
//             ...record,
//             name: values[0] as number,
//         });
//     }

//     const [typeVisible, setTypeVisible] = useState(false)
//     const [typeDesc, setTypeDesc] = useState('')
//     const confirmType = (options: PickerOption[], values: (string | number)[]) => {
//         let description = ''
//         options.forEach((option: any) => {
//             description += option.text
//         })
//         setTypeDesc(description)
//         setRecord({
//             ...record,
//             type: values[0] as number,
//         });
//     }

//     const startDate = new Date(2000, 0, 1)
//     const endDate = new Date(2025, 11, 30)
//     const [dateVisible, setDateVisible] = useState(false)
//     const [dateDesc, setDateDesc] = useState('')
//     const confirmDate = (values: (string | number)[], _options: PickerOption[]) => {
//         const date = values.slice(0, 3).join('-');
//         setDateDesc(`${date}`)
//         setRecord({
//             ...record,
//             date: date,
//         });
//     }

//     const [validVisible, setValidVisible] = useState(false)
//     const [validDesc, setValidDesc] = useState('')
//     const confirmValid = (options: PickerOption[], _values: (string | number)[]) => {
//         let description = ''
//         options.forEach((option: any) => {
//             description += option.text
//         })
//         setValidDesc(description)
//         setRecord({
//             ...record,
//             valid: parseInt(description) * (description.includes('年') ? 365 : 30),// 假设只有年和月的单位

//         });
//     }
//     const onSwitchChange = (value: boolean) => {
//         setRecord({
//             ...record,
//             reminder: value,
//         });
//     }

//     const onTextChange = (value: string) => {
//         setRecord({
//             ...record,
//             note: value,
//         });
//     }

//     const handleSubmission = async () => {
//         console.log('record:', record);// for debug
//         if (record && record.id >= 0 && record.name >= 0 && record.type >= 0 && record.date) {
//             try {
//                 const res = await api.request({ url: '/api/vaccination-records', method: 'POST', data: record })
//                 console.log(res.data);// for debug
//                 Taro.showToast({ title: '提交成功', icon: 'success' })
//                 setTimeout(() => {
//                     Taro.navigateBack()
//                 },1000)
                
//             } catch (error) {
//                 console.log('Error submitting vaccination record:', error);
//                 Taro.showToast({ title: '提交失败', icon: 'error' });
//             }

//         } else {
//             Taro.showToast({ title: '请填写完整记录', icon: 'error' });
//         }

//     }

//     const handleReset = () => {
//         setRecord({
//             id: -1,
//             name: -1,
//             type: -1,
//             date: '',
//             valid: 0,
//             reminder: true,
//             voucher: '',
//             note: '',
//         });
//         setIdDesc('');
//         setNameDesc('');
//         setTypeDesc('');
//         setDateDesc('');
//         setValidDesc('');

//         setIdVisible(false);
//         setNameVisible(false);
//         setTypeVisible(false);
//         setDateVisible(false);
//         setValidVisible(false);
//         Taro.showToast({ title: '重置成功', icon: 'success' })
//     }

//     return (
//         <>
//             <Cell title="接种人" description={idDesc} onClick={() => setIdVisible(!idVisible)}
//                 style={{ textAlign: 'center' }} />
//             <Picker
//                 title="接种人"
//                 visible={idVisible}
//                 options={MemberData}
//                 onConfirm={(list, values) => confirmID(list, values)}
//                 onClose={() => setIdVisible(false)}
//             />
//             <Cell title="疫苗名称" description={nameDesc} onClick={() => setNameVisible(!nameVisible)}
//                 style={{ textAlign: 'center' }} />
//             <Picker
//                 title="疫苗名称"
//                 visible={nameVisible}
//                 options={VaccineData}
//                 onConfirm={(list, values) => confirmName(list, values)}
//                 onClose={() => setNameVisible(false)}
//             />
//             <Cell title="接种类型" description={typeDesc} onClick={() => setTypeVisible(!typeVisible)}
//                 style={{ textAlign: 'center' }} />
//             <Picker
//                 title="接种类型"
//                 visible={typeVisible}
//                 options={TypeData}
//                 onConfirm={(list, values) => confirmType(list, values)}
//                 onClose={() => setTypeVisible(false)}
//             />
//             <Cell title="接种时间" description={dateDesc} onClick={() => setDateVisible(true)}
//                 style={{ textAlign: 'center' }} />
//             <DatePicker
//                 title="接种时间"
//                 startDate={startDate}
//                 endDate={endDate}
//                 visible={dateVisible}
//                 type="date"
//                 onClose={() => setDateVisible(false)}
//                 onConfirm={(options, values) => confirmDate(values, options)}
//             />
//             <Cell title="有效期限" description={validDesc} onClick={() => setValidVisible(!validVisible)}
//                 style={{ textAlign: 'center' }} />
//             <Picker
//                 title="期限"
//                 visible={validVisible}
//                 options={ValidData}
//                 onConfirm={(list, values) => confirmValid(list, values)}
//                 onClose={() => setValidVisible(false)}
//             />
//             <div className="flex-content">接种提醒
//                 <Switch defaultChecked onChange={(value) => onSwitchChange(value)} />
//             </div>
//             <div className="flex-content">接种凭证
//                 <Uploader
//                     url="https://img13.360buyimg.com/imagetools/jfs/t1/169186/5/33010/1762/639703a1E898bcb96/6c372c661c6dddfe.png" />
//             </div>
//             <TextArea rows={5} autoSize onChange={(value) => onTextChange(value)} />
//             <Button className="submit_btm" formType="submit" type="primary" onClick={handleSubmission} >
//                 提交
//             </Button>
//             <Button className="reset_btm" formType="reset" style={{ marginLeft: '20px' }} onClick={handleReset} >
//                 重置
//             </Button>
//         </>
//     )

// }