class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :date
      t.string :location
      t.string :time
      t.integer :volunteer_id

      t.timestamps
    end
  end
end
