import GetAPI from './Get'
import PostAPI from './Post'
import DeleteAPI from './Delete'

const getMahasiswa = () => GetAPI('mahasiswa?_sort=id$_order=desc?')
const postMahasiswa = (dataYgDiKirim) => PostAPI('mahasiswa', dataYgDiKirim)
const deleteMahasiswa = (dataYgDiHapus) => DeleteAPI('mahasiswa', dataYgDiHapus)
const API = {
    getMahasiswa: getMahasiswa,
    postMahasiswa: postMahasiswa,
    deleteMahasiswa: deleteMahasiswa
}

export default API