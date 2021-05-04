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

export type SectionDocumentUnion = DocNav_Document | Doc_Document | Blog_Document;

export type SectionParams = {
  docNav?: Maybe<DocNav_Input>;
  doc?: Maybe<Doc_Input>;
  blog?: Maybe<Blog_Input>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument?: Maybe<Document>;
  updateDocument?: Maybe<SectionDocumentUnion>;
  updateDocNavDocument?: Maybe<DocNav_Document>;
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


export type MutationUpdateDocNavDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
  params?: Maybe<DocNav_Input>;
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
  getDocNavDocument?: Maybe<DocNav_Document>;
  getDocNavList?: Maybe<Array<Maybe<DocNav_Document>>>;
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


export type QueryGetDocNavDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetDocDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetBlogDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};

export type DocNav_Data = DocNav_Doc_Data;

export type DocNav_Input = {
  docNav?: Maybe<DocNav_Doc_Input>;
};

export type DocNav_Values = DocNav_Doc_Values;

export type DocNav_Form = DocNav_Doc_Form;

export type DocNav_Document = Node & Document & {
  __typename?: 'DocNav_Document';
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  data?: Maybe<DocNav_Data>;
  values?: Maybe<DocNav_Values>;
  form?: Maybe<DocNav_Form>;
};

export type DocSectionSubItems_SubItems_Data = {
  __typename?: 'DocSectionSubItems_SubItems_Data';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Doc_Document>;
};

export type DocSection_SubItems_Data = {
  __typename?: 'DocSection_SubItems_Data';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Doc_Document>;
  subItems?: Maybe<Array<Maybe<DocSectionSubItems_SubItems_Data>>>;
};

export type DocSection_Data = {
  __typename?: 'DocSection_Data';
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subItems?: Maybe<Array<Maybe<DocSection_SubItems_Data>>>;
};

export type GuideSection_SubItems_Data = {
  __typename?: 'GuideSection_SubItems_Data';
  label?: Maybe<Scalars['String']>;
};

export type GuideSection_Data = {
  __typename?: 'GuideSection_Data';
  title?: Maybe<Scalars['String']>;
  subItems?: Maybe<Array<Maybe<GuideSection_SubItems_Data>>>;
};

export type DocNav_Sections_Data = DocSection_Data | GuideSection_Data;

export type DocNav_Doc_Data = {
  __typename?: 'DocNav_Doc_Data';
  title?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<DocNav_Sections_Data>>>;
  _body?: Maybe<Scalars['String']>;
};

export type DocSectionSubItems_SubItems_Values = {
  __typename?: 'DocSectionSubItems_SubItems_Values';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Reference']>;
};

export type DocSection_SubItems_Values = {
  __typename?: 'DocSection_SubItems_Values';
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Reference']>;
  subItems?: Maybe<Array<Maybe<DocSectionSubItems_SubItems_Values>>>;
};

export type DocSection_Values = {
  __typename?: 'DocSection_Values';
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subItems?: Maybe<Array<Maybe<DocSection_SubItems_Values>>>;
  _template?: Maybe<Scalars['String']>;
};

export type GuideSection_SubItems_Values = {
  __typename?: 'GuideSection_SubItems_Values';
  label?: Maybe<Scalars['String']>;
};

export type GuideSection_Values = {
  __typename?: 'GuideSection_Values';
  title?: Maybe<Scalars['String']>;
  subItems?: Maybe<Array<Maybe<GuideSection_SubItems_Values>>>;
  _template?: Maybe<Scalars['String']>;
};

export type DocNav_Sections_Values = DocSection_Values | GuideSection_Values;

export type DocNav_Doc_Values = {
  __typename?: 'DocNav_Doc_Values';
  title?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<DocNav_Sections_Values>>>;
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

export type DocSectionSubItems_SubItems_FormFieldsUnion = TextField | SelectField;

export type DocSectionSubItems_SubItems_GroupListField = FormField & {
  __typename?: 'DocSectionSubItems_SubItems_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<DocSectionSubItems_SubItems_FormFieldsUnion>>>;
};

export type DocSection_SubItems_FormFieldsUnion = TextField | SelectField | DocSectionSubItems_SubItems_GroupListField;

export type DocSection_SubItems_GroupListField = FormField & {
  __typename?: 'DocSection_SubItems_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<DocSection_SubItems_FormFieldsUnion>>>;
};

export type DocSection_FormFieldsUnion = TextField | DocSection_SubItems_GroupListField;

export type DocSection_Form = {
  __typename?: 'DocSection_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<DocSection_FormFieldsUnion>>>;
};

export type GuideSection_SubItems_FormFieldsUnion = TextField;

export type GuideSection_SubItems_GroupListField = FormField & {
  __typename?: 'GuideSection_SubItems_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<GuideSection_SubItems_FormFieldsUnion>>>;
};

export type GuideSection_FormFieldsUnion = TextField | GuideSection_SubItems_GroupListField;

export type GuideSection_Form = {
  __typename?: 'GuideSection_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<GuideSection_FormFieldsUnion>>>;
};

export type DocNav_Sections_BlocksFieldTemplates = {
  __typename?: 'DocNav_Sections_BlocksFieldTemplates';
  docSection?: Maybe<DocSection_Form>;
  guideSection?: Maybe<GuideSection_Form>;
};

export type DocNav_Sections_BlocksField = FormField & {
  __typename?: 'DocNav_Sections_BlocksField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  templates?: Maybe<DocNav_Sections_BlocksFieldTemplates>;
};

export type TextareaField = FormField & {
  __typename?: 'TextareaField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
};

export type DocNav_Doc_FormFieldsUnion = TextField | DocNav_Sections_BlocksField | TextareaField;

export type DocNav_Doc_Form = {
  __typename?: 'DocNav_Doc_Form';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<DocNav_Doc_FormFieldsUnion>>>;
};

export type DocSectionSubItems_SubItems_Input = {
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DocSection_SubItems_Input = {
  label?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  subItems?: Maybe<Array<Maybe<DocSectionSubItems_SubItems_Input>>>;
};

export type DocSection_Input = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subItems?: Maybe<Array<Maybe<DocSection_SubItems_Input>>>;
};

export type GuideSection_SubItems_Input = {
  label?: Maybe<Scalars['String']>;
};

export type GuideSection_Input = {
  title?: Maybe<Scalars['String']>;
  subItems?: Maybe<Array<Maybe<GuideSection_SubItems_Input>>>;
};

export type Sections_Input = {
  docSection?: Maybe<DocSection_Input>;
  guideSection?: Maybe<GuideSection_Input>;
};

export type DocNav_Doc_Input = {
  title?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<Sections_Input>>>;
  _body?: Maybe<Scalars['String']>;
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
  prev?: Maybe<Doc_Document>;
  id?: Maybe<Scalars['String']>;
  last_edited?: Maybe<Scalars['String']>;
  next?: Maybe<Doc_Document>;
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

export type Doc_Consumes_FormFieldsUnion = TextField;

export type Doc_Consumes_GroupListField = FormField & {
  __typename?: 'Doc_Consumes_GroupListField';
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Doc_Consumes_FormFieldsUnion>>>;
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

