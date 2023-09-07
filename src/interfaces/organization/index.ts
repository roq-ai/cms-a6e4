import { BlogInterface } from 'interfaces/blog';
import { FeatureInterface } from 'interfaces/feature';
import { PostInterface } from 'interfaces/post';
import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  blog?: BlogInterface[];
  feature?: FeatureInterface[];
  post?: PostInterface[];
  service?: ServiceInterface[];
  user?: UserInterface;
  _count?: {
    blog?: number;
    feature?: number;
    post?: number;
    service?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
