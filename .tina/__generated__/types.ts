// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
  JSONObject: any;
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
};

export type FormField = {
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};




export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  collection?: Maybe<Section>;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: Maybe<Scalars['Boolean']>;
};

export type Section = {
  __typename?: 'Section';
  type?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['String']>;
  match?: Maybe<Scalars['String']>;
  new_doc_ext?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<Document>>>;
};

export type SectionDocumentUnion = Doc_Document | Blog_Document;

export type SectionParams = {
  doc?: Maybe<Doc_Input>;
  blog?: Maybe<Blog_Input>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument?: Maybe<Document>;
  updateDocument?: Maybe<SectionDocumentUnion>;
  updateDocDocument?: Maybe<Doc_Document>;
  updateBlogDocument?: Maybe<Blog_Document>;
};


export type MutationAddPendingDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  collection?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<SectionParams>;
};


export type MutationUpdateDocDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Doc_Input>;
};


export type MutationUpdateBlogDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<Blog_Input>;
};

export type Query = {
  __typename?: 'Query';
  node?: Maybe<Node>;
  getDocument?: Maybe<SectionDocumentUnion>;
  getCollections?: Maybe<Array<Maybe<Section>>>;
  getCollection?: Maybe<Section>;
  getDocDocument?: Maybe<Doc_Document>;
  getDocList?: Maybe<Array<Maybe<Doc_Document>>>;
  getBlogDocument?: Maybe<Blog_Document>;
  getBlogList?: Maybe<Array<Maybe<Blog_Document>>>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryGetDocumentArgs = {
  collection?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetCollectionArgs = {
  collection?: Maybe<Scalars['String']>;
};


export type QueryGetDocDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetBlogDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};

export type Doc_Data = Doc_Doc_Data;

export type Doc_Input = {
  doc?: Maybe<Doc_Doc_Input>;
};

export type Doc_Values = Doc_Doc_Values;

export type Doc_Form = Doc_Doc_Form;

export type Doc_Document = Node & Document & {
  __typename?: 'Doc_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Doc_Data>;
  values?: Maybe<Doc_Values>;
  form?: Maybe<Doc_Form>;
};

export type Doc_Consumes_Data = {
  __typename?: 'Doc_Consumes_Data';
  file?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type Doc_Doc_Data = {
  __typename?: 'Doc_Doc_Data';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  prev?: Maybe<Blog_Document>;
  id?: Maybe<Scalars['String']>;
  last_edited?: Maybe<Scalars['String']>;
  next?: Maybe<Blog_Document>;
  consumes?: Maybe<Array<Maybe<Doc_Consumes_Data>>>;
  _body?: Maybe<Scalars['String']>;
};

export type Doc_Consumes_Values = {
  __typename?: 'Doc_Consumes_Values';
  file?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type Doc_Doc_Values = {
  __typename?: 'Doc_Doc_Values';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  prev?: Maybe<Scalars['Reference']>;
  id?: Maybe<Scalars['String']>;
  last_edited?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['Reference']>;
  consumes?: Maybe<Array<Maybe<Doc_Consumes_Values>>>;
  _body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type TextField = FormField & {
  __typename?: 'TextField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type SelectField = FormField & {
  __typename?: 'SelectField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Doc_Consumes_FormFieldsUnion = TextField;

export type Doc_Consumes_GroupListField = FormField & {
  __typename?: 'Doc_Consumes_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Doc_Consumes_FormFieldsUnion>>>;
};

export type TextareaField = FormField & {
  __typename?: 'TextareaField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type Doc_Doc_FormFieldsUnion = TextField | SelectField | Doc_Consumes_GroupListField | TextareaField;

export type Doc_Doc_Form = {
  __typename?: 'Doc_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Doc_Doc_FormFieldsUnion>>>;
};

export type Doc_Consumes_Input = {
  file?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type Doc_Doc_Input = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  prev?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_edited?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['String']>;
  consumes?: Maybe<Array<Maybe<Doc_Consumes_Input>>>;
  _body?: Maybe<Scalars['String']>;
};

export type Blog_Data = Basic_Doc_Data;

export type Blog_Input = {
  basic?: Maybe<Basic_Doc_Input>;
};

export type Blog_Values = Basic_Doc_Values;

export type Blog_Form = Basic_Doc_Form;

export type Blog_Document = Node & Document & {
  __typename?: 'Blog_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<Blog_Data>;
  values?: Maybe<Blog_Values>;
  form?: Maybe<Blog_Form>;
};

export type Basic_Consumes_Data = {
  __typename?: 'Basic_Consumes_Data';
  file?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type Basic_Doc_Data = {
  __typename?: 'Basic_Doc_Data';
  date?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  last_edited?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  draft?: Maybe<Scalars['Boolean']>;
  prev?: Maybe<Blog_Document>;
  next?: Maybe<Blog_Document>;
  consumes?: Maybe<Array<Maybe<Basic_Consumes_Data>>>;
  _body?: Maybe<Scalars['String']>;
};

export type Basic_Consumes_Values = {
  __typename?: 'Basic_Consumes_Values';
  file?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type Basic_Doc_Values = {
  __typename?: 'Basic_Doc_Values';
  date?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  last_edited?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  draft?: Maybe<Scalars['Boolean']>;
  prev?: Maybe<Scalars['Reference']>;
  next?: Maybe<Scalars['Reference']>;
  consumes?: Maybe<Array<Maybe<Basic_Consumes_Values>>>;
  _body?: Maybe<Scalars['String']>;
  _template?: Maybe<Scalars['String']>;
};

export type BooleanField = FormField & {
  __typename?: 'BooleanField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type Basic_Consumes_FormFieldsUnion = TextField;

export type Basic_Consumes_GroupListField = FormField & {
  __typename?: 'Basic_Consumes_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Basic_Consumes_FormFieldsUnion>>>;
};

export type Basic_Doc_FormFieldsUnion = TextField | BooleanField | SelectField | Basic_Consumes_GroupListField | TextareaField;

export type Basic_Doc_Form = {
  __typename?: 'Basic_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Basic_Doc_FormFieldsUnion>>>;
};

export type Basic_Consumes_Input = {
  file?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
};

export type Basic_Doc_Input = {
  date?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  last_edited?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  draft?: Maybe<Scalars['Boolean']>;
  prev?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['String']>;
  consumes?: Maybe<Array<Maybe<Basic_Consumes_Input>>>;
  _body?: Maybe<Scalars['String']>;
};

