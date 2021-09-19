import React from 'react'
import TextInput from '../../UI/input/TextInput'
import Select from '../../UI/select/Select'

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <TextInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <Select
        defaultValue={'Сортировка'}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { name: 'по названию', value: 'title' },
          { name: 'по содержимому', value: 'body' },
        ]}
      />
    </div>
  )
}
