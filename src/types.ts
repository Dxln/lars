// interface FileData extends FileEssentials {

// }

export interface FileData extends FileEssentials {
  content?: string;
  url?: string;
}

export interface FileEssentials {
  name: string;
  type: string;
  created_at: Date;
}
