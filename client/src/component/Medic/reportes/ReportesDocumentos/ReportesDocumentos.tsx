import { FiFileText } from 'react-icons/fi'
import styles from './ReportesDocumentos.module.css'

interface Documento {
    id: number;
    title: string;
    url: string;
  }
  
  interface ReportesDocumentosProps {
    documentos: Documento[]; 
  }
const ReportesDocumentos = ({ documentos }: ReportesDocumentosProps) => {
  return (
    <div className={styles.reportCard}>
      <h2>Documentos</h2>
      <div className={styles.documentList}>
        {documentos.map((doc) => (
          <a key={doc.id} href={doc.url} className={styles.document}>
            <FiFileText className={styles.icon} />
            <span>{doc.title}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ReportesDocumentos