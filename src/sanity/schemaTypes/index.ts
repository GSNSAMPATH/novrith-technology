import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { trustedLogo } from './trustedLogo'
import team from './team'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project,trustedLogo,team],
}
